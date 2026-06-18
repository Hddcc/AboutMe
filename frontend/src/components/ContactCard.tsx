import { ArrowUpRight, BookOpenText, Github, Image, Sparkles } from "lucide-react";
import type { ContactCard as ContactCardData } from "../types";

type ContactCardProps = {
  card: ContactCardData;
};

type InteriorProps = {
  card: ContactCardData;
};

export function ContactCard({ card }: ContactCardProps) {
  const content = (
    <article
      data-active-card
      className="group/card relative h-full w-full overflow-hidden rounded-[1.15rem] border border-white/10 bg-[linear-gradient(145deg,rgba(20,25,30,0.88),rgba(8,9,11,0.94))] shadow-signal-card outline-none backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-signal-mint/50 hover:shadow-signal-glow focus-visible:border-signal-mint focus-visible:shadow-signal-glow sm:rounded-[1.35rem]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(158,247,214,0.10),transparent_34%),linear-gradient(115deg,transparent_0%,rgba(158,247,214,0.05)_42%,transparent_70%)] opacity-70 transition-opacity duration-300 group-hover/card:opacity-100" />
      {renderInterior(card)}
    </article>
  );

  if (!card.href) {
    return <div className="h-full w-full">{content}</div>;
  }

  return (
    <a
      href={card.href}
      target="_blank"
      rel="noreferrer"
      className="block h-full w-full rounded-[1.35rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-mint focus-visible:ring-offset-2 focus-visible:ring-offset-graphite-950"
      aria-label={`Open ${card.title}`}
    >
      {content}
    </a>
  );
}

function renderInterior(card: ContactCardData) {
  switch (card.kind) {
    case "github":
      return <GitHubCard card={card} />;
    case "xiaohongshu":
      return <XiaohongshuCard card={card} />;
    case "wechat":
      return <WeChatCard card={card} />;
    default:
      return <FallbackCard card={card} />;
  }
}

function GitHubCard({ card }: InteriorProps) {
  return (
    <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
      <div>
        <div className="flex items-center gap-3 text-signal-mint">
          <Github size={24} strokeWidth={1.7} aria-hidden="true" />
          <span className="font-mono text-xs uppercase text-signal-mint/80">{card.label}</span>
        </div>
        <h2 data-card-title className="mt-5 font-display text-4xl font-semibold text-signal-ink sm:text-5xl">
          {card.title}
        </h2>
        <p className="mt-3 max-w-[17rem] text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
          {card.description}
        </p>
      </div>

      <div className="grid grid-cols-7 gap-1.5" aria-hidden="true">
        {Array.from({ length: 28 }).map((_, index) => (
          <span
            key={index}
            className={[
              "h-3 rounded-[3px] border border-white/[0.05]",
              index % 5 === 0 || index % 7 === 0
                ? "bg-signal-mint/70"
                : index % 3 === 0
                  ? "bg-signal-gold/50"
                  : "bg-white/[0.08]",
            ].join(" ")}
          />
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-white/[0.08] pt-4">
        <span className="truncate font-mono text-xs text-slate-400">{card.handle}</span>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-signal-gold">
          {card.action}
          <ArrowUpRight size={15} aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}

function XiaohongshuCard({ card }: InteriorProps) {
  return (
    <div className="relative z-10 grid h-full grid-rows-[auto_1fr_auto] p-5 sm:p-6">
      <div>
        <p className="font-mono text-xs uppercase text-signal-mint/75">{card.label}</p>
        <h2 data-card-title className="mt-3 font-display text-3xl font-semibold text-signal-ink sm:text-4xl">
          {card.title}
        </h2>
      </div>

      <div className="relative my-4 grid min-h-0 grid-cols-[1fr_0.72fr] gap-3">
        <div className="overflow-hidden rounded-lg border border-white/[0.08] bg-[linear-gradient(150deg,rgba(214,179,106,0.24),rgba(158,247,214,0.08))] p-4">
          <Image className="mb-8 text-signal-gold" size={26} strokeWidth={1.5} aria-hidden="true" />
          <p className="line-clamp-3 text-sm leading-6 text-slate-200">{card.description}</p>
        </div>
        <div className="grid gap-3">
          <span className="rounded-lg border border-white/[0.08] bg-white/[0.05]" />
          <span className="rounded-lg border border-white/[0.08] bg-[linear-gradient(145deg,rgba(158,247,214,0.18),rgba(255,255,255,0.04))]" />
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/[0.08] pt-4">
        <span className="truncate font-mono text-xs text-slate-400">{card.handle}</span>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-signal-gold">
          {card.action}
          <ArrowUpRight size={15} aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}

function WeChatCard({ card }: InteriorProps) {
  return (
    <div className="relative z-10 grid h-full place-items-center p-6 text-center sm:p-8">
      <div className="absolute inset-x-12 top-8 h-px bg-gradient-to-r from-transparent via-signal-mint/35 to-transparent" />
      <div>
        <h2 data-card-title className="font-display text-4xl font-semibold text-signal-ink sm:text-5xl">
          {card.title}
        </h2>
        <div className="mx-auto mt-6 grid h-36 w-36 place-items-center rounded-lg border border-white/12 bg-signal-ink p-3 shadow-[0_22px_70px_rgba(0,0,0,0.34)] sm:mt-7 sm:h-44 sm:w-44">
          {card.asset ? (
            <img src={card.asset} alt="WeChat" className="h-full w-full rounded-md object-contain" />
          ) : (
            <BookOpenText className="text-graphite-950" size={72} aria-hidden="true" />
          )}
        </div>
      </div>
    </div>
  );
}

function FallbackCard({ card }: InteriorProps) {
  return (
    <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
      <div>
        <div className="flex items-center gap-3 text-signal-mint">
          <Sparkles size={22} strokeWidth={1.6} aria-hidden="true" />
          <span className="font-mono text-xs uppercase text-signal-mint/75">{card.label}</span>
        </div>
        <h2 data-card-title className="mt-5 font-display text-3xl font-semibold text-signal-ink sm:text-4xl">
          {card.title}
        </h2>
        <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">{card.description}</p>
      </div>
      <div className="flex items-center justify-between border-t border-white/[0.08] pt-4">
        <span className="truncate font-mono text-xs text-slate-400">{card.handle}</span>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-signal-gold">
          {card.action}
          {card.href ? <ArrowUpRight size={15} aria-hidden="true" /> : null}
        </span>
      </div>
    </div>
  );
}
