import { spawn } from "node:child_process";
import { openSync } from "node:fs";
import path from "node:path";

const root = path.resolve(".");
const script = path.join(root, ".fork-skill/serve-dist.mjs");
const out = openSync(path.join(root, ".fork-skill/dist-server.out.log"), "a");
const err = openSync(path.join(root, ".fork-skill/dist-server.err.log"), "a");

const child = spawn(process.execPath, [script], {
  cwd: root,
  detached: true,
  stdio: ["ignore", out, err],
  windowsHide: true,
});

child.unref();
console.log(child.pid);
