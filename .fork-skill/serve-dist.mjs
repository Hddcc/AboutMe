import http from "node:http";
import { createReadStream, existsSync } from "node:fs";
import path from "node:path";

const root = path.resolve("frontend/dist");
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
};

http
  .createServer((request, response) => {
    const url = new URL(request.url || "/", "http://127.0.0.1:5173");
    const filePath = path.join(root, url.pathname === "/" ? "index.html" : url.pathname);
    const safePath = filePath.startsWith(root) && existsSync(filePath) ? filePath : path.join(root, "index.html");
    response.setHeader("Content-Type", types[path.extname(safePath)] || "application/octet-stream");
    createReadStream(safePath).pipe(response);
  })
  .listen(5173, "127.0.0.1", () => {
    console.log("dist server listening on http://127.0.0.1:5173/");
  });
