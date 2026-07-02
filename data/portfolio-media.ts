import type { ProjectDiscipline, ProjectMedia } from "@/types";

export type PortfolioCategory = "Logo Design" | "Brand Identity" | "Web Design" | "UI/UX Design" | "Development";

export type LogoShowcaseItem = ProjectMedia & {
  title: string;
};

export const logoShowcaseItems: readonly LogoShowcaseItem[] = [
  {
    title: "Alura Interiors",
    src: "/images/logo design1/Alura Interiors 2.webp",
    alt: "Alura Interiors monochrome wordmark logo presentation.",
    width: 1280,
    height: 738,
  },
  {
    title: "Vella Wordmark",
    src: "/images/logo design1/Elegant & Modern Fashion Wordmark Logo Design for Ready-to-Wear Brands.webp",
    alt: "Vella fashion wordmark logo over a monochrome editorial image.",
    width: 736,
    height: 920,
  },
  {
    title: "Astoria Identity",
    src: "/images/logo design1/Luxury Logo Design for Premium Brands.webp",
    alt: "Astoria luxury logo design with gold typography on a deep green background.",
    width: 736,
    height: 1318,
  },
  {
    title: "Mana Mark",
    src: "/images/logo design1/Logo design for a subscription box - Blanc Lueur Studio.webp",
    alt: "Mana self-care logo mark and wordmark in champagne on a deep green background.",
    width: 736,
    height: 1318,
  },
  {
    title: "Nisarga Collection",
    src: "/images/logo design1/Nisarga Collection.jpg",
    alt: "Nisarga Collection logo design presentation.",
    width: 736,
    height: 736,
  },
  {
    title: "Pandora Salon",
    src: "/images/logo design1/Pandora Salon.jpg",
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
