import { spawn } from "node:child_process";
import { mkdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { setTimeout as wait } from "node:timers/promises";

const browserPath = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const profileDir = join(tmpdir(), "personal-blog-devtools-debug");
const port = 9224;

await rm(profileDir, { recursive: true, force: true });
await mkdir(profileDir, { recursive: true });

const browser = spawn(browserPath, [
  "--headless",
  "--disable-gpu",
  "--disable-dev-shm-usage",
  "--disable-extensions",
  "--no-first-run",
  "--remote-allow-origins=*",
  `--user-data-dir=${profileDir}`,
  `--remote-debugging-port=${port}`,
  "about:blank",
], { stdio: ["ignore", "ignore", "pipe"] });

let errors = "";
browser.stderr.on("data", (chunk) => {
  errors += chunk.toString();
});

try {
  const version = await endpoint("/json/version");
  const tab = await endpoint(`/json/new?${encodeURIComponent("http://127.0.0.1:18080/")}`, { method: "PUT" });
  const browserResult = await probe(version.webSocketDebuggerUrl, "Browser.getVersion");
  const pageResult = await probe(tab.webSocketDebuggerUrl, "Runtime.evaluate", {
    expression: "document.title",
    returnByValue: true,
  });
  console.log(JSON.stringify({ version, tab, browserResult, pageResult }, null, 2));
} finally {
  browser.kill();
}

async function endpoint(path, init) {
  for (let i = 0; i < 40; i += 1) {
    if (browser.exitCode !== null) {
      throw new Error(`Browser exited:\n${errors}`);
    }
    try {
      const response = await fetch(`http://127.0.0.1:${port}${path}`, init);
      if (response.ok) {
        return response.json();
      }
    } catch {
      await wait(250);
    }
  }
  throw new Error(`Endpoint did not answer ${path}:\n${errors}`);
}

function probe(url, method, params = {}) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(url);
    const timer = setTimeout(() => {
      ws.close();
      reject(new Error(`Timed out waiting for ${method}`));
    }, 8000);
    ws.addEventListener("open", () => {
      ws.send(JSON.stringify({ id: 1, method, params }));
    });
    ws.addEventListener("message", async (event) => {
      clearTimeout(timer);
      const payload =
        typeof event.data === "string"
          ? event.data
          : event.data instanceof Blob
            ? await event.data.text()
            : Buffer.from(event.data).toString("utf8");
      ws.close();
      resolve(JSON.parse(payload));
    });
    ws.addEventListener("error", reject);
  });
}
