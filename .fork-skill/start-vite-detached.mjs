import { spawn } from "node:child_process";
import { openSync } from "node:fs";
import path from "node:path";

const root = path.resolve(".");
const frontend = path.join(root, "frontend");
const viteBin = path.join(frontend, "node_modules/vite/bin/vite.js");
const out = openSync(path.join(root, ".fork-skill/vite.out.log"), "a");
const err = openSync(path.join(root, ".fork-skill/vite.err.log"), "a");

const child = spawn(process.execPath, [viteBin, "--host", "127.0.0.1", "--port", "5173"], {
  cwd: frontend,
  detached: true,
  stdio: ["ignore", out, err],
  windowsHide: true,
});

child.unref();
console.log(child.pid);
