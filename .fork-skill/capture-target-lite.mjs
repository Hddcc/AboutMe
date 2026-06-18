import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "../frontend/node_modules/playwright/index.mjs";

const root = path.resolve(".");
const frontend = path.join(root, "frontend");
const outDir = path.join(root, ".fork-skill/evidence/target-lite");
await mkdir(outDir, { recursive: true });

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
  const viewports = [
    ["desktop", { width: 1440, height: 900 }],
    ["mobile", { width: 390, height: 844 }],
  ];

  for (const [name, viewport] of viewports) {
    const page = await browser.newPage({ viewport });
    await page.goto("http://127.0.0.1:5173/", { waitUntil: "networkidle", timeout: 30000 });
    await page.screenshot({ path: path.join(outDir, `${name}.png`), fullPage: true });
    await page.close();
  }

  await browser.close();
} finally {
  server.kill();
}
