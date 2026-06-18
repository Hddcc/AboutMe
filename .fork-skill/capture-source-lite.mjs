import { chromium } from "../frontend/node_modules/playwright/index.mjs";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve(".fork-skill/evidence/source-lite");
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const viewports = [
  ["desktop", { width: 1440, height: 900 }],
  ["mobile", { width: 390, height: 844 }],
];

for (const [name, viewport] of viewports) {
  const page = await browser.newPage({ viewport });
  page.setDefaultTimeout(12000);
  await page.goto("https://wamdigital.com/blog", {
    waitUntil: "domcontentloaded",
    timeout: 30000,
  });
  await page.waitForTimeout(3500);
  await page.screenshot({
    path: path.join(outDir, `${name}.png`),
    fullPage: true,
  });

  const data = await page.evaluate(() => {
    const text = document.body?.innerText || "";
    const links = [...document.querySelectorAll("a")]
      .slice(0, 80)
      .map((link) => ({
        text: link.textContent?.trim(),
        href: link.href,
      }));
    const images = [...document.images].map((image) => ({
      alt: image.alt,
      src: image.currentSrc || image.src,
      width: image.naturalWidth,
      height: image.naturalHeight,
    }));
    const headings = [...document.querySelectorAll("h1,h2,h3")]
      .map((heading) => ({
        tag: heading.tagName,
        text: heading.textContent?.trim(),
      }));
    const colors = [...document.querySelectorAll("body, header, main, section, article, h1, h2, h3, p, a, button")]
      .slice(0, 120)
      .map((element) => {
        const styles = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return {
          tag: element.tagName,
          className: element.className?.toString(),
          text: element.textContent?.trim().slice(0, 120),
          color: styles.color,
          background: styles.backgroundColor,
          fontFamily: styles.fontFamily,
          fontSize: styles.fontSize,
          fontWeight: styles.fontWeight,
          lineHeight: styles.lineHeight,
          x: Math.round(rect.x),
          y: Math.round(rect.y),
          width: Math.round(rect.width),
          height: Math.round(rect.height),
        };
      });
    return { url: location.href, title: document.title, text, links, images, headings, colors };
  });

  await writeFile(path.join(outDir, `${name}.json`), JSON.stringify(data, null, 2));
  await page.close();
}

await browser.close();
