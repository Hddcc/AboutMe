export type ContactCard = {
  id: string;
  kind: "github" | "xiaohongshu" | "wechat" | string;
  label: string;
  title: string;
  description: string;
  href?: string;
  handle?: string;
  asset?: string;
  action: string;
  theme?: string;
};

export type Profile = {
  name: string;
  avatar: string;
  avatarAlt: string;
  introduction: string;
  cards: ContactCard[];
};
