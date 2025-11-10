export type NavLink = {
  label: string
  href: string
  external?: boolean
}

export const navLinks: NavLink[] = [
  { label: "关于", href: "#top_about" },
  { label: "成员", href: "#top_talent" },
  { label: "资讯", href: "#top_news" },
  {
    label: "试镜",
    href: "https://audition.hololivepro.com/",
    external: true,
  },
]

export const navSecondaryLinks: NavLink[] = [
  {
    label: "协作",
    href: "https://hololivepro.com/collaboration",
    external: true,
  },
  {
    label: "支持广告",
    href: "https://hololivepro.com/support_advertising",
    external: true,
  },
  {
    label: "官方商店",
    href: "https://shop.hololivepro.com/",
    external: true,
  },
  {
    label: "HOLODULE",
    href: "https://schedule.hololive.tv/",
    external: true,
  },
]

export const navLegalLinks: NavLink[] = [
  {
    label: "概要",
    href: "https://hololivepro.com/request-to-minors/",
    external: true,
  },
  {
    label: "隐私策略",
    href: "https://hololivepro.com/terms/",
    external: true,
  },
  {
    label: "常见问题解答",
    href: "https://hololivepro.com/question/",
    external: true,
  },
]

export type LanguageOption = {
  label: string
  code: string
  href: string
  active?: boolean
}

export const languages: LanguageOption[] = [
  { label: "中文", code: "zh", href: "/", active: true },
  { label: "EN", code: "en", href: "https://hololivepro.com/en/" },
  { label: "ID", code: "id", href: "https://hololivepro.com/id/" },
]

export type HeroSlide = {
  id: string
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
  desktopImage: string
  mobileImage: string
}

export const heroSlides: HeroSlide[] = [
  {
    id: "fest",
    title: "hololive 6th fes. Color Rise Harmony",
    description: "全员集结的双舞台演唱会，2025 东京国际展示场举行。",
    ctaLabel: "查看日程",
    ctaHref: "https://schedule.hololive.tv/",
    desktopImage:
      "https://hololivepro.com/wp-content/uploads/2025/03/top_slide_pc.webp",
    mobileImage:
      "https://hololivepro.com/wp-content/uploads/2025/03/slide_01.png",
  },
  {
    id: "world-tour",
    title: "Worldwide Tour “Star Link”",
    description: "以全息舞台与现场乐队打造的全球巡回演出计划。",
    ctaLabel: "预约门票",
    ctaHref: "https://hololivepro.com/news",
    desktopImage:
      "https://hololivepro.com/wp-content/uploads/2025/03/slide_02.png",
    mobileImage:
      "https://hololivepro.com/wp-content/uploads/2025/03/slide_02.png",
  },
  {
    id: "holostars",
    title: "HOLOSTARS NEXT TALENT SHOWCASE",
    description: "HOLOSTARS 企划推出全新组合，携手粉丝迈向下一阶段。",
    ctaLabel: "了解详情",
    ctaHref: "https://holostars.hololivepro.com/",
    desktopImage:
      "https://hololivepro.com/wp-content/uploads/2025/03/slide_04.png",
    mobileImage:
      "https://hololivepro.com/wp-content/uploads/2025/03/slide_04.png",
  },
]

export type TalentGroup = {
  id: string
  name: string
  localeLabel: string
  description: string
  logo: string
  image: string
  link: string
  align?: "left" | "right"
}

export const talentGroups: TalentGroup[] = [
  {
    id: "hololive",
    name: "hololive",
    localeLabel: "日文组",
    description: "36 名成员以歌唱与综艺内容深受欢迎，持续拓展音乐与线下活动。",
    logo: "https://hololivepro.com/wp-content/themes/hololive_production/images/top_logo_hololive.svg",
    image:
      "https://hololivepro.com/wp-content/themes/hololive_production/images/top_talents_hololive.png",
    link: "https://hololive.hololivepro.com/talents?gp=hololive",
    align: "left",
  },
  {
    id: "hololive-id",
    name: "hololive Indonesia",
    localeLabel: "印尼组",
    description: "多语种主播以歌回与游戏直播著称，活跃于东南亚合作项目。",
    logo: "https://hololivepro.com/wp-content/themes/hololive_production/images/top_logo_hololive_id.svg",
    image:
      "https://hololivepro.com/wp-content/themes/hololive_production/images/top_talents_hololive_id.png",
    link: "https://hololive.hololivepro.com/talents?gp=indonesia",
    align: "right",
  },
  {
    id: "hololive-en",
    name: "hololive English",
    localeLabel: "英文组",
    description: "面向全球粉丝，打造原创音乐、3D Live 与跨品牌宣传合作。",
    logo: "https://hololivepro.com/wp-content/themes/hololive_production/images/top_logo_hololive_en.svg",
    image:
      "https://hololivepro.com/wp-content/themes/hololive_production/images/top_talents_hololive_en2.png",
    link: "https://hololive.hololivepro.com/talents?gp=english",
    align: "left",
  },
  {
    id: "devis",
    name: "hololive DEV_IS",
    localeLabel: "全新创研组",
    description: "ReGLOSS、FLOW GLOW 等子团以新颖音乐与艺术企划为核心。",
    logo: "https://hololivepro.com/wp-content/themes/hololive_production/images/top_logo_devis.svg",
    image:
      "https://hololivepro.com/wp-content/themes/hololive_production/images/top_talents_devis_03.png",
    link: "https://hololive.hololivepro.com/talents?gp=devis",
    align: "right",
  },
  {
    id: "holostars",
    name: "HOLOSTARS",
    localeLabel: "男性团体",
    description: "以音乐与综艺节目扩展男性虚拟艺人市场，与品牌跨界频繁。",
    logo: "https://hololivepro.com/wp-content/themes/hololive_production/images/top_logo_holostars.svg",
    image:
      "https://hololivepro.com/wp-content/themes/hololive_production/images/top_talents_holostars.png",
    link: "https://holostars.hololivepro.com/talent?gp=holostars",
    align: "left",
  },
  {
    id: "holostars-en",
    name: "HOLOSTARS English",
    localeLabel: "全球拓展",
    description: "以冒险故事线与互动节目为特色，连结欧美观众与玩家。",
    logo: "https://hololivepro.com/wp-content/themes/hololive_production/images/top_logo_holostars_en.svg",
    image:
      "https://hololivepro.com/wp-content/themes/hololive_production/images/top_talents_holostars_en.png",
    link: "https://holostars.hololivepro.com/talent?gp=holostars-english",
    align: "right",
  },
]

export type NewsItem = {
  id: string
  date: string
  title: string
  image: string
  href: string
}

export const newsItems: NewsItem[] = [
  {
    id: "20251019-01-256",
    date: "2025.10.19",
    title: "hololive 第三章 1st EP 发布会确定 2026/1/17-18 于幕张举办",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2025/10/main.webp",
    href: "https://hololivepro.com/news/20251019-01-256/",
  },
  {
    id: "20250924-01-255",
    date: "2025.09.24",
    title: "全新组合 Lapis Lazuli 正式揭晓并宣布首次公演",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2025/09/250924_main2.webp",
    href: "https://hololivepro.com/news/20250924-01-255/",
  },
  {
    id: "20250924-01-254",
    date: "2025.09.24",
    title: "hololive 官方粉丝俱乐部全新网站上线",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2025/09/250924_main.jpg",
    href: "https://hololivepro.com/news/20250924-01-254/",
  },
  {
    id: "20250913-01-253",
    date: "2025.09.13",
    title: "ReGLOSS 第二次演唱会「Flashpoint」公布追加场次",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2025/09/250913Flashpoint_main.webp",
    href: "https://hololivepro.com/news/20250913-01-253/",
  },
  {
    id: "20250912-01-252",
    date: "2025.09.12",
    title: "hololive EN 音声剧 THE NEXUS GATE -Act I- 正式开演",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2025/09/ENpop_logo.png",
    href: "https://hololivepro.com/news/20250912-01-252/",
  },
  {
    id: "20250829-01-251",
    date: "2025.08.29",
    title: "AZKi 巡演「Departure」确认国内追加站与签名会",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2025/08/250829Departure_main.webp",
    href: "https://hololivepro.com/news/20250829-01-251/",
  },
  {
    id: "20250820-01-250",
    date: "2025.08.20",
    title: "hololive Indonesia 五周年演唱会《Chromatic Future》来袭",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2025/08/250817_main.webp",
    href: "https://hololivepro.com/news/20250820-01-250/",
  },
  {
    id: "20250808-01-249",
    date: "2025.08.08",
    title: "星街彗星 2nd EP《SHINier》定档 10/8 推出",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2025/08/250808SHINier_main.webp",
    href: "https://hololivepro.com/news/20250808-01-249/",
  },
]

export const auditionLinks = [
  {
    label: "日本才艺",
    href: "https://audition.hololivepro.com/",
  },
  {
    label: "印尼才艺",
    href: "https://audition.hololivepro.com/id",
  },
  {
    label: "英语才艺",
    href: "https://audition.hololivepro.com/en",
  },
]

export type BannerCard = {
  id: string
  href: string
  image: string
  width: number
  height: number
  label: string
}

export const bannerCards: BannerCard[] = [
  {
    id: "hololive-site",
    label: "hololive 官网",
    href: "https://hololive.hololivepro.com/",
    image: "https://hololivepro.com/wp-content/uploads/2023/03/hololive_hp.png",
    width: 640,
    height: 218,
  },
  {
    id: "holostars-site",
    label: "HOLOSTARS 官网",
    href: "https://holostars.hololivepro.com/",
    image:
      "https://hololivepro.com/wp-content/uploads/2023/03/holostars_hp.png",
    width: 640,
    height: 218,
  },
  {
    id: "official-shop",
    label: "官方商店",
    href: "https://shop.hololivepro.com/",
    image:
      "https://hololivepro.com/wp-content/uploads/2023/03/officialshop_hp.png",
    width: 640,
    height: 218,
  },
  {
    id: "holoplus",
    label: "HOLOPLUS 应用",
    href: "https://www.holoplus.com/",
    image: "https://hololivepro.com/wp-content/uploads/2023/08/holoplus_hp.png",
    width: 640,
    height: 218,
  },
  {
    id: "fanclub",
    label: "官方粉丝俱乐部",
    href: "https://hololive-fc.hololivepro.com/",
    image:
      "https://hololivepro.com/wp-content/uploads/2025/10/productionsite_hololiveproduction_hololive_1010.jpg",
    width: 640,
    height: 218,
  },
  {
    id: "cardgame",
    label: "官方卡牌游戏",
    href: "https://hololive-official-cardgame.com",
    image:
      "https://hololivepro.com/wp-content/uploads/2024/06/cardgame-300x102.png",
    width: 300,
    height: 102,
  },
]

export type SocialGroup = {
  title: string
  links: { label: string; href: string }[]
}

export const socialGroups: SocialGroup[] = [
  {
    title: "hololive",
    links: [
      {
        label: "YouTube",
        href: "https://www.youtube.com/channel/UCJFZiqLMntJufDCHc6bQixg",
      },
      { label: "X", href: "https://twitter.com/hololivetv" },
      { label: "TikTok", href: "https://www.tiktok.com/@hololive_official" },
    ],
  },
  {
    title: "hololive Indonesia",
    links: [
      {
        label: "YouTube",
        href: "https://www.youtube.com/channel/UCfrWoRGlawPQDQxxeIDRP0Q",
      },
      { label: "X", href: "https://twitter.com/hololive_Id" },
      {
        label: "Facebook",
        href: "https://www.facebook.com/people/Hololive-Indonesia/100063546336394/",
      },
      { label: "TikTok", href: "https://www.tiktok.com/@hololiveid_official" },
      {
        label: "Instagram",
        href: "https://www.instagram.com/hololiveid_official/",
      },
    ],
  },
  {
    title: "hololive English",
    links: [
      {
        label: "YouTube",
        href: "https://www.youtube.com/channel/UCotXwY6s8pWmuWd_snKYjhg",
      },
      { label: "X", href: "https://twitter.com/hololive_En" },
      { label: "Facebook", href: "https://www.facebook.com/hololivetv" },
      { label: "TikTok", href: "https://www.tiktok.com/@hololive_english" },
      { label: "Reddit", href: "https://www.reddit.com/r/Hololive/" },
    ],
  },
  {
    title: "hololive DEV_IS ReGLOSS",
    links: [
      { label: "YouTube", href: "https://www.youtube.com/@hololiveDEV_IS" },
    ],
  },
  {
    title: "hololive DEV_IS FLOW GLOW",
    links: [
      { label: "YouTube", href: "https://www.youtube.com/@DEV_IS_FLOWGLOW" },
    ],
  },
  {
    title: "HOLOSTARS",
    links: [
      {
        label: "YouTube",
        href: "https://www.youtube.com/channel/UCWsfcksUUpoEvhia0_ut0bA",
      },
      { label: "X", href: "https://twitter.com/holostarstv" },
    ],
  },
  {
    title: "HOLOSTARS English",
    links: [
      {
        label: "YouTube",
        href: "https://www.youtube.com/channel/UCJxZpzx4wHzEYD-eCiZPikg",
      },
      { label: "X", href: "https://x.com/HOLOSTARSen" },
      { label: "TikTok", href: "https://www.tiktok.com/@holostars_english" },
      { label: "Instagram", href: "https://www.instagram.com/holostars_en" },
    ],
  },
]
