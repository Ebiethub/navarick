import type { ProjectDiscipline, ProjectMedia } from "@/types";

export type PortfolioCategory = "Logo Design" | "Brand Identity" | "Web Design" | "UI/UX Design" | "Development";

export type LogoShowcaseItem = ProjectMedia & {
  title: string;
};

export const logoShowcaseItems: readonly LogoShowcaseItem[] = [
  {
    title: "Alura Interiors",
    src: "/images/logo-design/logo-02.webp",
    alt: "Alura Interiors monochrome wordmark logo presentation.",
    width: 1280,
    height: 738,
  },
  {
    title: "Vella Wordmark",
    src: "/images/logo-design/logo-21.webp",
    alt: "Vella fashion wordmark logo over a monochrome editorial image.",
    width: 736,
    height: 920,
  },
  {
    title: "Astoria Identity",
    src: "/images/logo-design/logo-33.webp",
    alt: "Astoria luxury logo design with gold typography on a deep green background.",
    width: 736,
    height: 1318,
  },
  {
    title: "Mana Mark",
    src: "/images/logo-design/logo-27.webp",
    alt: "Mana self-care logo mark and wordmark in champagne on a deep green background.",
    width: 736,
    height: 1318,
  },
  {
    title: "Nisarga Collection",
    src: "/images/logo-design/logo-35.jpg",
    alt: "Nisarga Collection logo design presentation.",
    width: 736,
    height: 736,
  },
  {
    title: "Pandora Salon",
    src: "/images/logo-design/logo-36.jpg",
    alt: "Pandora Salon logo design presentation.",
    width: 736,
    height: 736,
  },
];

export const categoryDisciplineMap: Record<PortfolioCategory, readonly ProjectDiscipline[]> = {
  "Logo Design": ["Logo Design"],
  "Brand Identity": ["Brand Identity", "Brand Strategy"],
  "Web Design": ["Website Design", "Web Design"],
  "UI/UX Design": ["UI/UX Design", "Mobile Apps", "Product Design"],
  Development: ["Web Development"],
};
