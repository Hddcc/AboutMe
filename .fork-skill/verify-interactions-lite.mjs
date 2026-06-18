import { spawn } from "node:child_process";
import path from "node:path";
import { chromium } from "../frontend/node_modules/playwright/index.mjs";

const root = path.resolve(".");
const frontend = path.join(root, "frontend");
const viteBin = path.join(frontend, "node_modules/vite/bin/vite.js");
const server = spawn(process.execPath, [viteBin, "--host", "127.0.0.1", "--port", "5173"], {
  cwd: frontend,
  stdio: "ignore",
  windowsHide: true,
});

async function waitForServer() {
  const deadline = Date.now() + 30000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch("http://127.0.0.1:5173/");
      if (response.ok) return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
  throw new Error("Vite server did not start");
}

try {
  await waitForServer();
  const browser = await chromium.launch({ headless: true });
  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobile.goto("http://127.0.0.1:5173/", { waitUntil: "networkidle", timeout: 30000 });
  await mobile.getByRole("heading", { name: "Yufeng Zhang" }).waitFor();
  await mobile.getByAltText("Yufeng Zhang avatar").waitFor();
  if (await mobile.getByLabel("Toggle menu").count()) throw new Error("mobile menu should be absent");
  const mobileScroll = await mobile.evaluate(() => ({
    scrollHeight: document.documentElement.scrollHeight,
    clientHeight: document.documentElement.clientHeight,
  }));
  if (mobileScroll.scrollHeight > mobileScroll.clientHeight + 1) {
    throw new Error(`mobile page scrolls: ${mobileScroll.scrollHeight} > ${mobileScroll.clientHeight}`);
  }
  await mobile.close();

  const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await desktop.goto("http://127.0.0.1:5173/", { waitUntil: "networkidle", timeout: 30000 });
  await desktop.addStyleTag({ content: ".featured-track { animation: none !important; }" });
  await desktop.getByRole("heading", { name: "Yufeng Zhang" }).waitFor();
  if (await desktop.locator("header").count()) throw new Error("header should be absent");
  if (await desktop.getByText("About Us").count()) throw new Error("primary navigation should be absent");
  if (await desktop.getByText("Contact Us").count()) throw new Error("Contact Us should be absent");
  const desktopScroll = await desktop.evaluate(() => ({
    scrollHeight: document.documentElement.scrollHeight,
    clientHeight: document.documentElement.clientHeight,
  }));
  if (desktopScroll.scrollHeight > desktopScroll.clientHeight + 1) {
    throw new Error(`desktop page scrolls: ${desktopScroll.scrollHeight} > ${desktopScroll.clientHeight}`);
  }
  await desktop.getByRole("link", { name: /SEO in 2026/ }).first().hover();
  await desktop.getByRole("button", { name: "right featured posts" }).hover();
  await desktop.close();

  await browser.close();
  console.log("interaction checks passed");
} finally {
  server.kill();
}
