import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

const files = {
  app: read("frontend/src/App.tsx"),
  switcher: read("frontend/src/components/CardSwitcher.tsx"),
  card: read("frontend/src/components/ContactCard.tsx"),
  background: read("frontend/src/components/SignalBackground.tsx"),
};

const protectedCardHash = "B2C0BB70F67B636B3E3028A1718B780C311A8A23882BFA2954481EE3C99579A6";

const checks = [
  ["ContactCard internals are unchanged", sha256(files.card) === protectedCardHash],
  ["desktop title is reduced", files.app.includes("lg:text-[5.9rem]") && !files.app.includes("lg:text-[7.6rem]")],
  ["active card is moved to right-middle-high", files.app.includes("lg:top-[24vh]") && !files.app.includes("lg:bottom-[13vh]")],
  ["echoes capped at two", files.app.includes("cards.slice(0, 2)") && !files.app.includes("cards.slice(0, 3)")],
  ["echoes are subtle", files.app.includes("opacity-35") && files.app.includes("opacity-28") && !files.app.includes("opacity-55")],
  ["echoes are non-interactive and hidden on mobile", files.app.includes("pointer-events-none absolute inset-0 -z-10") && files.app.includes("aria-hidden=\"true\"") && files.app.includes("hidden rounded") && files.app.includes("sm:block")],
  ["single connector path only", count(files.app, "<path") === 1],
  ["connector has no node circles", !files.app.includes("<circle")],
  ["connector is low opacity", files.app.includes("text-signal-mint/20")],
  ["decorative glass planes are reduced", count(extractFunction(files.app, "CanvasGlass"), "<div className=\"absolute") === 2 && !files.app.includes("bottom-[18vh] left-[25vw]")],
  ["background noise is reduced", files.background.includes("opacity-[0.16]") && files.background.includes("opacity-[0.07]") && files.background.includes("opacity-[0.08]")],
  ["background respects reduced motion", files.background.includes("useReducedMotion") && files.background.includes("reduceMotion ? undefined")],
  ["active card dimensions stay fixed", files.switcher.includes("h-[17.75rem]") && files.switcher.includes("sm:h-[22rem]")],
  ["switcher loop behavior remains", files.switcher.includes("(current + nextDirection + total) % total")],
  ["no forbidden visible labels in edited sources", !/Personal Blog|Backend|Notes|Signal Deck|Scan the QR code placeholder|WeChat QR|Scan code/.test([files.app, files.switcher, files.background].join("\n"))],
];

const failed = checks.filter(([, passed]) => !passed);
console.log(JSON.stringify({
  passed: checks.length - failed.length,
  total: checks.length,
  failed: failed.map(([name]) => name),
}, null, 2));

if (failed.length > 0) {
  process.exitCode = 1;
}

function read(path) {
  return readFileSync(path, "utf8");
}

function count(value, needle) {
  return value.split(needle).length - 1;
}

function extractFunction(source, name) {
  const start = source.indexOf(`function ${name}`);
  if (start === -1) return "";
  const nextFunction = source.indexOf("\nfunction ", start + 1);
  return source.slice(start, nextFunction > start ? nextFunction : undefined);
}

function sha256(value) {
  return createHash("sha256").update(value).digest("hex").toUpperCase();
}
