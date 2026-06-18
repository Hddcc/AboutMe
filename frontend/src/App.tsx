type PlatformKind = "bilibili" | "netease" | "github" | "xiaohongshu" | "email" | "generic" | (string & {});
type PlatformCardStatus = "active" | "draft";

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

type PlatformCard = {
  kind: PlatformKind;
  status: PlatformCardStatus;
  label: string;
  headline: string;
  description: string;
  href: string;
  handle?: string;
  action: string;
  accent: string;
  tags?: string[];
};

const platformCards: PlatformCard[] = [
  {
    kind: "bilibili",
    status: "active",
    label: "Bilibili",
    headline: "虽然有个B站链接",
    description: "但是其实里面什么东西都没有",
    href: "https://space.bilibili.com/390509974?spm_id_from=333.788.0.0",
    handle: "@Yufeng Zhang",
    action: "Watch",
    accent: "#FB7299",
    tags: ["video", "demo", "learning"],
  },
  {
    kind: "netease",
    status: "active",
    label: "NetEase Cloud Music",
    headline: "抑云资深用户",
    description: "如果你听歌的品味和我一样，那说明你听歌的品味和我一样。",
    href: "https://music.163.com/#/user/home?id=1570725353",
    handle: "Yufeng's listening room",
    action: "Listen",
    accent: "#E60026",
    tags: ["playlist", "focus", "daily"],
  },
  {
    kind: "github",
    status: "active",
    label: "GitHub",
    headline: "Find me on GitHub",
    description: "I write my GitHub in English. It just looks fancier​ that way.",
    href: "https://github.com/Hddcc",
    handle: "github.com/yufeng-zhang",
    action: "Explore",
    accent: "#7CFFB2",
    tags: ["projects", "tools", "writing"],
  },
  {
    kind: "xiaohongshu",
    status: "active",
    label: "Xiaohongshu",
    headline: "做一名记录者",
    description: "随手写下的，是我的生活",
    href: "https://www.xiaohongshu.com/user/profile/5c9c67e6000000001601c6c4",
    handle: "Yufeng Zhang",
    action: "Read",
    accent: "#FF2442",
    tags: ["notes", "images", "life"],
  },
  {
    kind: "email",
    status: "active",
    label: "Email",
    headline: "这是我的邮箱地址",
    description: "如果你有任何想法或者建议，欢迎随时联系我！",
    href: "mailto:531210118@qq.com",
    handle: "531210118@qq.com",
    action: "Write",
    accent: "#F5D67B",
    tags: ["contact", "hello", "work"],
  },
  {
    kind: "generic",
    status: "draft",
    label: "More",
    headline: "Space for the next address",
    description: "This card is ready for another platform when the page grows.",
    href: "#",
    handle: "Coming soon",
    action: "Soon",
    accent: "#FFFFFF",
    tags: ["future", "link", "archive"],
  },
];

const publicPlatformCards = platformCards.filter((card) => card.status === "active");

export function App() {
  return (
    <main className="relative flex h-dvh min-h-[620px] flex-col overflow-hidden bg-black text-white sm:min-h-[720px]">
      <section className="relative flex shrink-0 items-end px-5 pb-5 pt-8 sm:px-8 sm:pb-7 sm:pt-14 lg:h-[35dvh] lg:px-20 lg:pb-5 lg:pt-10">
        <HeroGlow />
        <IdentityHero />
      </section>

      <section className="relative flex min-h-0 flex-1 flex-col justify-start overflow-hidden pb-4 pt-6 sm:pb-6 sm:pt-8 lg:justify-end lg:pb-5 lg:pt-0">
        <div className="featured-marquee px-3">
          <div className="featured-track">
            <PlatformCardGroup cards={publicPlatformCards} />
            <PlatformCardGroup cards={publicPlatformCards} isDuplicate />
          </div>
        </div>
        <div className="mx-auto mt-4 flex w-full max-w-[1280px] justify-between px-10 lg:mt-5 lg:px-20">
          <ArrowButton direction="left" />
          <ArrowButton direction="right" />
        </div>
      </section>
    </main>
  );
}

function PlatformCardGroup({ cards, isDuplicate = false }: { cards: PlatformCard[]; isDuplicate?: boolean }) {
  return (
    <div className="featured-card-group" aria-hidden={isDuplicate ? "true" : undefined}>
      {cards.map((card) => (
        <PlatformLinkCard key={`${isDuplicate ? "duplicate" : "primary"}-${card.kind}-${card.label}`} card={card} isDuplicate={isDuplicate} />
      ))}
    </div>
  );
}

function IdentityHero() {
  return (
    <div className="relative z-10 flex max-w-[1180px] items-center gap-6 sm:gap-8 lg:gap-12">
      <div className="relative flex h-40 w-40 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/40 bg-white/[0.06] shadow-[0_20px_80px_rgba(0,0,0,0.42)] sm:h-56 sm:w-56 lg:h-72 lg:w-72">
        <img src={assetUrl("assets/avatar-yufeng.png")} alt="Yufeng Zhang avatar" className="h-full w-full object-cover" />
      </div>
      <div>
        <h1 className="text-[2.35rem] font-medium leading-[0.98] tracking-normal text-white sm:text-[4.4rem] lg:text-[5.2rem]">
          Yufeng Zhang
        </h1>
        <p className="mt-3 max-w-[34rem] text-base font-normal leading-6 text-white/70 sm:mt-4 sm:text-xl sm:leading-8 lg:text-2xl lg:leading-9">
          曾在CVPR、ICCV、AAAI、IEEE等会议上点开官网看过，在腾讯、字节跳动、美团、阿里巴巴、京东等企业都有app账号，同时具有二十余年windows用户经验，在token没耗尽前是天才少年，耗尽另说。
        </p>
      </div>
    </div>
  );
}

function HeroGlow() {
  return (
    <>
      <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] -translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgba(94,60,255,0.45),rgba(255,17,112,0.34)_40%,transparent_68%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-[22rem] h-64 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.04),transparent_48%)]" />
    </>
  );
}

function PlatformLinkCard({ card, isDuplicate = false }: { card: PlatformCard; isDuplicate?: boolean }) {
  return (
    <a
      className="group relative grid h-[300px] w-[350px] overflow-hidden rounded-[18px] border border-white/70 bg-[#101010] text-white shadow-[0_24px_90px_rgba(0,0,0,0.35)] outline-none transition duration-300 hover:border-white hover:shadow-[0_30px_110px_rgba(255,255,255,0.12)] focus-visible:border-white focus-visible:ring-2 focus-visible:ring-white/80 lg:h-[576px] lg:w-[520px]"
      href={card.href}
      aria-label={`${card.label}: ${card.headline}`}
      tabIndex={isDuplicate ? -1 : undefined}
      style={{ "--card-accent": card.accent } as React.CSSProperties}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,color-mix(in_srgb,var(--card-accent)_28%,transparent),transparent_42%)] opacity-80" />
      <div className="relative flex h-full min-h-0 flex-col p-6 sm:p-7 lg:p-10">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full border border-white/25 bg-white/[0.08] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white/78">
            {card.label}
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-xl transition group-hover:bg-white group-hover:text-black lg:h-12 lg:w-12 lg:text-2xl">
            {"->"}
          </span>
        </div>

        <div className="mt-5 h-[84px] shrink-0 lg:mt-7 lg:h-[210px]">
          <PlatformInterior card={card} />
        </div>

        <div className="mt-4 flex min-h-0 flex-1 flex-col lg:mt-7">
          <h2 className="max-w-[22rem] text-[1.28rem] font-medium leading-[1.04] tracking-normal sm:text-[1.42rem] lg:text-[2.55rem]">
            {card.headline}
          </h2>
          <p className="mt-2 max-w-[24rem] text-sm leading-5 text-white/68 lg:mt-4 lg:text-base lg:leading-6">
            {card.description}
          </p>
          <div className="mt-auto flex items-center text-sm text-white/55">
            <span className="min-w-0 truncate">{card.handle}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

function PlatformInterior({ card }: { card: PlatformCard }) {
  switch (card.kind) {
    case "bilibili":
      return <BilibiliInterior />;
    case "netease":
      return <NetEaseInterior />;
    case "github":
      return <GitHubInterior />;
    case "xiaohongshu":
      return <XiaohongshuInterior tags={card.tags ?? []} />;
    case "email":
      return <EmailInterior email={card.handle ?? ""} />;
    default:
      return <GenericInterior tags={card.tags ?? []} />;
  }
}

function LegacyBilibiliInterior() {
  return (
    <div className="relative h-full min-h-[88px] overflow-hidden rounded-[14px] border border-white/15 bg-[#071018] lg:min-h-[210px]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,161,214,0.38),transparent_45%),linear-gradient(315deg,rgba(251,114,153,0.32),transparent_42%)]" />
      <div className="absolute left-4 top-4 flex gap-2">
        <span className="h-2 w-2 rounded-full bg-[#00A1D6]" />
        <span className="h-2 w-2 rounded-full bg-[#FB7299]" />
        <span className="h-2 w-8 rounded-full bg-white/30" />
      </div>
      <div className="absolute inset-x-6 bottom-5 h-2 overflow-hidden rounded-full bg-white/15">
        <span className="block h-full w-7/12 rounded-full bg-white" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/50 bg-white/15 text-3xl text-white backdrop-blur transition group-hover:scale-110">
          {"▶"}
        </span>
      </div>
      <div className="absolute right-4 top-4 rounded-full bg-black/35 px-3 py-1 text-xs font-bold text-white/85">04:26</div>
    </div>
  );
}

function BilibiliInterior() {
  return (
    <div className="relative flex h-full min-h-[88px] items-center gap-3 overflow-hidden rounded-[14px] border border-white/15 bg-[linear-gradient(135deg,#090c12,#120814_54%,#08111a)] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] lg:min-h-[210px] lg:gap-6 lg:p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_42%,rgba(251,114,153,0.34),transparent_26%),radial-gradient(circle_at_84%_24%,rgba(0,161,214,0.18),transparent_24%),linear-gradient(112deg,rgba(255,255,255,0.06),transparent_30%,rgba(251,114,153,0.08)_66%,transparent)]" />
      <div className="absolute -left-2 bottom-0 h-14 w-28 rounded-full bg-[#fb7299]/20 blur-2xl lg:h-24 lg:w-40" />

      <div className="relative z-10 h-16 w-16 shrink-0 overflow-visible sm:h-20 sm:w-20 lg:h-40 lg:w-40">
        <img
          src={assetUrl("assets/bilibili-pikachu-avatar.png")}
          alt=""
          className="h-full w-full rounded-full object-cover object-center shadow-[0_14px_36px_rgba(0,0,0,0.34),0_0_24px_rgba(251,114,153,0.16)] lg:shadow-[0_24px_70px_rgba(0,0,0,0.42),0_0_32px_rgba(251,114,153,0.18)]"
        />
        <span className="absolute -right-1 top-3 h-4 w-4 rounded-full bg-[#00a1d6]/70 blur-[2px] lg:h-7 lg:w-7" />
      </div>

      <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-center pt-2 lg:pt-4">
        <div className="mt-1 lg:mt-3">
          <p className="text-[1.2rem] font-black leading-none tracking-[0.04em] text-[#ff87ad] drop-shadow-[0_0_18px_rgba(251,114,153,0.2)] sm:text-[1.35rem] lg:text-[2.9rem]">
            BILIBILI
          </p>
          <p className="mt-1 hidden text-[0.72rem] leading-4 text-white/56 sm:block lg:mt-2 lg:text-sm lg:leading-6">
            life clips, tiny demos, and ideas in motion
          </p>
        </div>
        <div className="mt-3 flex items-center gap-2 lg:mt-5">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/12 lg:h-2">
            <span className="block h-full w-[68%] rounded-full bg-[linear-gradient(90deg,#fb7299,#ff9db8_58%,#8adfff)]" />
          </div>
          <span className="hidden h-2 w-2 rounded-full bg-[#8adfff] shadow-[0_0_10px_rgba(138,223,255,0.7)] lg:block" />
        </div>
      </div>
    </div>
  );
}

function NetEaseInterior() {
  return (
    <div className="relative h-full min-h-[88px] overflow-hidden rounded-[14px] lg:min-h-[210px]">
      <img
        src={assetUrl("assets/netease-cloud-music-showcase.png")}
        alt=""
        className="h-full w-full object-fill"
      />
    </div>
  );
}

function GitHubInterior() {
  return (
    <div className="relative flex h-full min-h-[84px] flex-col overflow-hidden rounded-[14px] border border-white/15 bg-[#070b0d] p-4 lg:min-h-[210px] lg:p-6">
      <div className="mb-4 flex gap-2">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      </div>
      <div className="space-y-2 font-mono text-xs text-white/70 lg:text-sm">
        <p>
          <span className="text-[#7CFFB2]">$</span> open useful-ideas
        </p>
        <p className="hidden text-white/45 sm:block">building small tools for clearer work</p>
        <p className="hidden text-white/45 lg:block">writing notes that can become products</p>
      </div>
      <div className="mt-auto grid grid-cols-12 gap-1.5 pt-4">
        {Array.from({ length: 24 }).map((_, index) => (
          <span
            key={index}
            className="aspect-square rounded-[3px]"
            style={{ backgroundColor: index % 5 === 0 ? "#7CFFB2" : index % 3 === 0 ? "rgba(124,255,178,0.38)" : "rgba(255,255,255,0.08)" }}
          />
        ))}
      </div>
    </div>
  );
}

function XiaohongshuInterior({ tags }: { tags: string[] }) {
  return (
    <div className="relative flex h-full min-h-[88px] items-center gap-3 overflow-hidden rounded-[14px] border border-white/15 bg-[radial-gradient(circle_at_22%_50%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_72%_48%,rgba(255,36,66,0.2),transparent_30%),linear-gradient(135deg,#07080f,#12070c_58%,#050507)] px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] lg:gap-6 lg:px-5 lg:py-4">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05),transparent_28%,rgba(255,36,66,0.08)_70%,transparent)] opacity-80" />
      <div className="absolute bottom-0 right-0 h-16 w-28 translate-x-5 translate-y-5 rounded-full bg-[#ff2442]/15 blur-2xl lg:h-28 lg:w-44" />

      <div className="relative z-10 h-16 w-16 shrink-0 overflow-visible sm:h-20 sm:w-20 lg:h-36 lg:w-36">
        <img
          src={assetUrl("assets/xiaohongshu-dog-avatar.png")}
          alt=""
          className="h-full w-full rounded-full object-cover shadow-[0_16px_42px_rgba(0,0,0,0.36)] lg:shadow-[0_24px_70px_rgba(0,0,0,0.42)]"
        />
        <span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_44%,rgba(255,36,66,0.06))]" />
      </div>

      <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-center pt-1 lg:h-full lg:pt-0">
        <span className="text-[1.5rem] font-black leading-none tracking-normal text-[#ff344f] drop-shadow-[0_0_20px_rgba(255,36,66,0.24)] sm:text-[1.85rem] lg:text-[3.45rem]">
          小红书
        </span>
        <div className="mt-2 hidden flex-wrap gap-2 sm:flex lg:mt-5">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full border border-[#ff344f]/25 bg-white/[0.06] px-2.5 py-1 text-[0.65rem] font-bold text-white/62">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function EmailInterior({ email }: { email: string }) {
  return (
    <div className="relative flex h-full min-h-[88px] items-center justify-center overflow-hidden rounded-[14px] border border-white/15 bg-[#171309] px-5 lg:min-h-[210px] lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(245,214,123,0.36),transparent_38%)]" />
      <div className="relative w-full rounded-[14px] border border-[#f5d67b]/45 bg-black/35 p-4 shadow-[0_20px_70px_rgba(245,214,123,0.16)] lg:p-6">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5d67b] text-xl text-black">@</span>
          <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#f5d67b]">Inbox</span>
        </div>
        <p className="truncate text-base text-white lg:text-xl">{email}</p>
        <div className="mt-4 h-px bg-[#f5d67b]/40" />
      </div>
    </div>
  );
}

function GenericInterior({ tags }: { tags: string[] }) {
  return (
    <div className="relative h-full min-h-[88px] overflow-hidden rounded-[14px] border border-white/15 bg-[#111] p-4 lg:min-h-[210px] lg:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.22),transparent_35%)]" />
      <div className="relative grid h-full grid-cols-3 gap-3">
        {tags.map((tag, index) => (
          <div key={tag} className="flex flex-col justify-between rounded-[12px] border border-white/12 bg-white/[0.06] p-3">
            <span className="h-8 w-8 rounded-full bg-white/20" />
            <span className="text-xs font-bold text-white/70">{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArrowButton({ direction }: { direction: "left" | "right" }) {
  return (
    <button
      className={`flex h-14 w-14 items-center justify-center rounded-full border border-white text-3xl transition hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${
        direction === "left" ? "rotate-180" : ""
      }`}
      type="button"
      aria-label={`${direction} featured links`}
    >
      {"->"}
    </button>
  );
}
