import { spawn } from "node:child_process";
import { mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { setTimeout as wait } from "node:timers/promises";

const browserCandidates = [
  process.env.BROWSER_PATH,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
].filter(Boolean);
const chromePath = browserCandidates.find((candidate) => existsSync(candidate));
if (!chromePath) {
  throw new Error("No supported Chromium browser was found.");
}

const profileDir = join(tmpdir(), "personal-blog-homepage-chrome-profile");
const port = 9223;
const targetUrl = process.env.TARGET_URL ?? "http://127.0.0.1:8080/";

await rm(profileDir, { recursive: true, force: true });
await mkdir(profileDir, { recursive: true });

const chrome = spawn(chromePath, [
  "--headless",
  "--disable-gpu",
  "--disable-dev-shm-usage",
  "--disable-extensions",
  "--no-first-run",
  "--no-default-browser-check",
  "--remote-allow-origins=*",
  `--user-data-dir=${profileDir}`,
  `--remote-debugging-port=${port}`,
  "about:blank",
], { stdio: ["ignore", "ignore", "pipe"] });

let browserErrors = "";
chrome.stderr.on("data", (chunk) => {
  browserErrors += chunk.toString();
});

try {
  const endpoint = await waitForEndpoint();
  const ws = new WebSocket(endpoint);
  await onceOpen(ws);

  let id = 0;
  const pending = new Map();
  ws.addEventListener("message", async (event) => {
    const payload =
      typeof event.data === "string"
        ? event.data
        : event.data instanceof Blob
          ? await event.data.text()
          : Buffer.from(event.data).toString("utf8");
    const message = JSON.parse(payload);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject, timer } = pending.get(message.id);
      clearTimeout(timer);
      pending.delete(message.id);
      if (message.error) reject(new Error(JSON.stringify(message.error)));
      else resolve(message.result);
    }
  });

  const send = (method, params = {}, sessionId) => new Promise((resolve, reject) => {
    const commandId = ++id;
    const timer = setTimeout(() => {
      pending.delete(commandId);
      reject(new Error(`Timed out waiting for ${method}`));
    }, 8000);
    pending.set(commandId, { resolve, reject, timer });
    ws.send(JSON.stringify({ id: commandId, method, params, sessionId }));
  });

  const target = await send("Target.createTarget", { url: "about:blank" });
  const attached = await send("Target.attachToTarget", {
    targetId: target.targetId,
    flatten: true,
  });
  const sessionId = attached.sessionId;
  const pageSend = (method, params = {}) => send(method, params, sessionId);

  await pageSend("Runtime.enable");

  const desktop = await verifyViewport(pageSend, 1440, 900);
  const mobile = await verifyViewport(pageSend, 390, 844);
  const fallback = await verifyFallbackCard(pageSend);

  ws.close();
  console.log(JSON.stringify({ endpoint, desktop, mobile, fallback }, null, 2));
} finally {
  chrome.kill();
}

async function verifyViewport(send, width, height) {
  await send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 600,
  });
  await send("Page.navigate", { url: targetUrl });
  await wait(1200);

  const first = await evaluate(send, pageSnapshot);
  await evaluate(send, clickNext);
  await wait(500);
  const second = await evaluate(send, pageSnapshot);
  await evaluate(send, clickNext);
  await wait(500);
  const third = await evaluate(send, pageSnapshot);
  await evaluate(send, clickNext);
  await wait(500);
  const looped = await evaluate(send, pageSnapshot);
  await evaluate(send, clickPrevious);
  await wait(500);
  const previousLooped = await evaluate(send, pageSnapshot);

  return {
    width,
    height,
    first,
    second,
    third,
    looped,
    previousLooped,
    noBodyScroll: [first, second, third, looped, previousLooped].every(
      (snapshot) => snapshot.scrollHeight <= height && snapshot.scrollWidth <= width,
    ),
    cardSizeStable:
      sameRect(first.cardRect, second.cardRect) &&
      sameRect(second.cardRect, third.cardRect) &&
      sameRect(third.cardRect, looped.cardRect) &&
      sameRect(looped.cardRect, previousLooped.cardRect),
    loopsForward: first.title === looped.title,
    loopsBackward: third.title === previousLooped.title,
    platformTitles:
      first.title === "GitHub" &&
      second.title === "Xiaohongshu" &&
      third.title === "WeChat",
    forbiddenVisible: visibleForbidden([first, second, third, looped, previousLooped]),
    longWechatPlaceholderVisible: third.text.includes("Scan the QR code placeholder"),
    wechatMetadataVisible: third.text.includes("WeChat QR") || third.text.includes("Scan code"),
    wechatQrVisible: third.text.includes("WeChat") && Boolean(third.qrImageAlt),
  };
}

async function verifyFallbackCard(send) {
  await send("Page.addScriptToEvaluateOnNewDocument", {
    source: `
      const nativeFetch = globalThis.fetch.bind(globalThis);
      globalThis.fetch = async (input, init) => {
        const url = typeof input === "string" ? input : input.url;
        if (url === "/api/profile" || url.endsWith("/api/profile")) {
          return new Response(JSON.stringify({
            name: "Your Name",
            avatar: new URL("/assets/avatar-placeholder.svg", ${JSON.stringify(targetUrl)}).toString(),
            avatarAlt: "Personal avatar portrait",
            introduction: "A simple personal home.",
            cards: [{
              id: "website",
              kind: "website",
              label: "Website",
              title: "Website",
              description: "A simple place to continue.",
              href: "https://example.com/",
              handle: "example.com",
              action: "Open"
            }]
          }), { headers: { "Content-Type": "application/json" } });
        }
        return nativeFetch(input, init);
      };
    `,
  });
  await send("Emulation.setDeviceMetricsOverride", {
    width: 390,
    height: 844,
    deviceScaleFactor: 1,
    mobile: true,
  });
  await send("Page.navigate", { url: targetUrl });
  await wait(1200);
  const snapshot = await evaluate(send, pageSnapshot);
  return {
    rendered: snapshot.title === "Website",
    title: snapshot.title,
    sameOuterContract: snapshot.cardRect?.width === 350 && snapshot.cardRect?.height === 284,
    forbiddenVisible: snapshot.forbiddenVisible,
  };
}

async function evaluate(send, fn) {
  const result = await send("Runtime.evaluate", {
    expression: `(${fn.toString()})()`,
    awaitPromise: true,
    returnByValue: true,
  });
  return result.result.value;
}

function pageSnapshot() {
  const activeCard = document.querySelector("[data-active-card]");
  const cardRect = activeCard?.getBoundingClientRect();
  const text = document.body.innerText;
  const forbidden = ["Personal Blog", "Backend", "React", "Notes", "Signal Deck"];
  return {
    title: activeCard?.querySelector("[data-card-title]")?.textContent ?? "",
    text,
    forbiddenVisible: forbidden.filter((item) => text.includes(item)),
    qrImageAlt: activeCard?.querySelector("img[alt='WeChat']")?.getAttribute("alt") ?? "",
    bodyHeight: document.body.getBoundingClientRect().height,
    scrollHeight: document.documentElement.scrollHeight,
    scrollWidth: document.documentElement.scrollWidth,
    viewportHeight: window.innerHeight,
    viewportWidth: window.innerWidth,
    cardRect: cardRect
      ? {
          width: Math.round(cardRect.width),
          height: Math.round(cardRect.height),
          left: Math.round(cardRect.left),
          top: Math.round(cardRect.top),
        }
      : null,
  };
}

function clickNext() {
  document.querySelector("[aria-label='Show next card']").click();
}

function clickPrevious() {
  document.querySelector("[aria-label='Show previous card']").click();
}

function sameRect(a, b) {
  return Boolean(a && b && a.width === b.width && a.height === b.height);
}

function visibleForbidden(snapshots) {
  return [...new Set(snapshots.flatMap((snapshot) => snapshot.forbiddenVisible))];
}

async function waitForEndpoint() {
  for (let i = 0; i < 40; i += 1) {
    if (chrome.exitCode !== null) {
      throw new Error(`Chromium exited before remote debugging started:\n${browserErrors}`);
    }

    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (response.ok) {
        const json = await response.json();
        return json.webSocketDebuggerUrl;
      }
    } catch {
      await wait(250);
    }
  }
  throw new Error("Chrome remote debugging endpoint did not start");
}

function onceOpen(ws) {
  return new Promise((resolve, reject) => {
    ws.addEventListener("open", resolve, { once: true });
    ws.addEventListener("error", reject, { once: true });
  });
}
