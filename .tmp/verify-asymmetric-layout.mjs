import { readFileSync } from "node:fs";

const files = {
  app: read("frontend/src/App.tsx"),
  switcher: read("frontend/src/components/CardSwitcher.tsx"),
  card: read("frontend/src/components/ContactCard.tsx"),
  background: read("frontend/src/components/SignalBackground.tsx"),
};

const checks = [
  ["app keeps viewport overflow contract", files.app.includes("h-dvh") && files.app.includes("overflow-hidden")],
  ["app uses absolute spatial canvas", count(files.app, "absolute") >= 12 && !files.app.includes("lg:grid-cols")],
  ["identity cluster is asymmetric", files.app.includes("rotate-[-6deg]") && files.app.includes("lg:absolute")],
  ["card stage is floating", files.app.includes("bottom-[4.5rem]") && files.app.includes("lg:bottom-[13vh]")],
  ["decorative glass layers exist", files.app.includes("CanvasGlass") && files.app.includes("backdrop-blur")],
  ["connector layer is decorative", files.app.includes("ConnectorField") && files.app.includes("pointer-events-none") && files.app.includes("aria-hidden=\"true\"")],
  ["card echoes are bounded", files.app.includes("cards.slice(0, 3)")],
  ["card echoes are non-interactive", files.app.includes("pointer-events-none absolute inset-0 -z-10") && !extractFunction(files.app, "CardEchoes").includes("<button") && !extractFunction(files.app, "CardEchoes").includes("<a")],
  ["mobile hides echoes", extractFunction(files.app, "CardEchoes").includes("hidden") && extractFunction(files.app, "CardEchoes").includes("sm:block")],
  ["active card mobile height fixed", files.switcher.includes("h-[17.75rem]")],
  ["active card desktop height fixed", files.switcher.includes("sm:h-[22rem]")],
  ["switcher loops infinitely", files.switcher.includes("(current + nextDirection + total) % total")],
  ["switcher keeps local animation", files.switcher.includes("AnimatePresence") && files.switcher.includes("motion.div")],
  ["switcher respects reduced motion", files.switcher.includes("useReducedMotion")],
  ["active card focus is visible", files.card.includes("focus-visible:ring-2") && files.card.includes("focus-visible:border-signal-mint")],
  ["active card has glass styling", files.card.includes("backdrop-blur-xl") && files.card.includes("rounded-[1.15rem]")],
  ["known renderers exist", ["case \"github\"", "case \"xiaohongshu\"", "case \"wechat\"", "FallbackCard"].every((item) => files.card.includes(item))],
  ["background respects reduced motion", files.background.includes("useReducedMotion") && files.background.includes("reduceMotion ? undefined")],
  ["no forbidden source labels", !/Personal Blog|Backend|Notes|Signal Deck|Scan the QR code placeholder|WeChat QR|Scan code/.test(Object.values(files).join("\n"))],
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
  const nextConst = source.indexOf("\nconst ", start + 1);
  const endCandidates = [nextFunction, nextConst].filter((index) => index > start);
  return source.slice(start, endCandidates.length ? Math.min(...endCandidates) : undefined);
}
