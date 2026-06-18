import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

const app = readFileSync("frontend/src/App.tsx", "utf8");
const background = readFileSync("frontend/src/components/SignalBackground.tsx", "utf8");
const switcher = readFileSync("frontend/src/components/CardSwitcher.tsx", "utf8");
const contact = readFileSync("frontend/src/components/ContactCard.tsx", "utf8");

const expectedContactHash = "B2C0BB70F67B636B3E3028A1718B780C311A8A23882BFA2954481EE3C99579A6";
const actualContactHash = createHash("sha256").update(contact).digest("hex").toUpperCase();
const canvasGlass = app.slice(app.indexOf("function CanvasGlass"));
const backgroundLayers = background.match(/<div className="absolute inset-0/g)?.length ?? 0;

const checks = [
  ["ContactCard internals unchanged", actualContactHash === expectedContactHash],
  ["Hero cluster exists", app.includes("data-hero-cluster")],
  ["Cluster uses requested dimensions", app.includes("h-[min(34rem,calc(100dvh-3rem))]") && app.includes("w-[min(61.25rem,calc(100vw-2rem))]")],
  ["ConnectorField removed", !app.includes("ConnectorField") && !app.includes("<path") && !app.includes("<svg")],
  ["CardEchoes removed", !app.includes("CardEchoes") && !app.includes("cards.slice")],
  ["ContactCard data type import removed", !app.includes("ContactCard, Profile")],
  ["CanvasGlass has one unified glass layer", canvasGlass.includes("absolute inset-0 rounded-[2.25rem]")],
  ["CanvasGlass no longer has left/right plates", !app.includes("left-[2%] top-[16vh]") && !app.includes("left-[52%] top-[28vh]")],
  ["Identity and card live in same cluster", app.indexOf('aria-label="Identity"') > app.indexOf("data-hero-cluster") && app.indexOf('aria-label="Contact card stage"') > app.indexOf("data-hero-cluster")],
  ["Avatar bridges identity and card", app.includes("left-[46%] top-[18%]") && app.includes("lg:left-[45%]")],
  ["Name stays second focal scale", app.includes("lg:text-[4.55rem]") && !app.includes("lg:text-[5.9rem]")],
  ["Intro sits under name as card", app.includes("max-w-[25rem]") && app.includes("bg-graphite-900/54")],
  ["Card is right-middle within cluster", app.includes("lg:right-[5.5rem]") && app.includes("lg:top-[8.75rem]")],
  ["Active card outer focus strongest", app.includes("lg:scale-[1.06]") && app.includes("shadow-[0_50px_180px_rgba(0,0,0,0.52)]")],
  ["Background grid noise reduced", background.includes("opacity-[0.12]") && !background.includes("opacity-[0.16]")],
  ["Background dot noise reduced", background.includes("opacity-[0.055]") && !background.includes("opacity-[0.08]")],
  ["No new background layers implied", backgroundLayers === 4],
  ["Reduced motion still respected", background.includes("useReducedMotion") && switcher.includes("useReducedMotion")],
  ["Switcher dimensions remain fixed", switcher.includes("sm:w-[24.5rem]") && switcher.includes("sm:h-[22rem]")],
  ["Switcher loop remains infinite", switcher.includes("(current + nextDirection + total) % total")],
];

const failed = checks.filter(([, passed]) => !passed).map(([name]) => name);

console.log(
  JSON.stringify(
    {
      passed: checks.length - failed.length,
      total: checks.length,
      failed,
    },
    null,
    2,
  ),
);

if (failed.length > 0) {
  process.exit(1);
}
