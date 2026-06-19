import type { Profile } from "./types";

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const fallbackProfile: Profile = {
  name: "ZYF's Space",
  avatar: assetUrl("assets/avatar-placeholder.svg"),
  avatarAlt: "Personal avatar portrait",
  introduction:
    "Welcome. I collect my projects, writing, and everyday thoughts here so you can quickly know who I am and where to find me.",
  cards: [
    {
      id: "github",
      kind: "github",
      label: "Projects",
      title: "GitHub",
      description:
        "A place to see what I build, polish, and keep improving over time.",
      href: "https://github.com/",
      handle: "@your-github",
      action: "View projects",
      theme: "work",
    },
    {
      id: "xiaohongshu",
      kind: "xiaohongshu",
      label: "Moments",
      title: "Xiaohongshu",
      description:
        "Images, short thoughts, and small observations from work and daily life.",
      href: "https://www.xiaohongshu.com/",
      handle: "RED ID: your-id",
      action: "Open moments",
      theme: "journal",
    },
    {
      id: "wechat",
      kind: "wechat",
      label: "Contact",
      title: "WeChat",
      description: "Scan to connect on WeChat.",
      asset: assetUrl("assets/wechat-qr-placeholder.svg"),
      handle: "",
      action: "",
      theme: "contact",
    },
  ],
};
