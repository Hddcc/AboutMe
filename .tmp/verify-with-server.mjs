import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { setTimeout as wait } from "node:timers/promises";

const targetUrl = "http://127.0.0.1:18080/";

await mkdir(".tmp/go-build", { recursive: true });

const server = spawn("go", ["run", "."], {
  cwd: process.cwd(),
  env: {
    ...process.env,
    ADDR: ":18080",
    GOCACHE: `${process.cwd()}\\.tmp\\go-build`,
  },
  stdio: ["ignore", "pipe", "pipe"],
});

let output = "";
server.stdout.on("data", (chunk) => {
  output += chunk.toString();
});
server.stderr.on("data", (chunk) => {
  output += chunk.toString();
});

try {
  await waitForServer();
  await runVerification();
} finally {
  server.kill();
}

async function waitForServer() {
  for (let i = 0; i < 60; i += 1) {
    if (server.exitCode !== null) {
      throw new Error(`Server exited before verification:\n${output}`);
    }

    try {
      const response = await fetch(`${targetUrl}api/profile`);
      if (response.ok) {
        return;
      }
    } catch {
      await wait(500);
    }
  }

  throw new Error(`Server did not start:\n${output}`);
}

function runVerification() {
  return new Promise((resolve, reject) => {
    const child = spawn("node", [".tmp/verify-page.mjs"], {
      cwd: process.cwd(),
      env: {
        ...process.env,
        TARGET_URL: targetUrl,
      },
      stdio: "inherit",
    });

    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Verification failed with exit code ${code}`));
      }
    });
    child.on("error", reject);
  });
}
