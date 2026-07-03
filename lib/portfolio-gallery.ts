import fs from "node:fs";
import path from "node:path";

import type { PortfolioCategory } from "@/data/portfolio-media";

const portfolioImageRoot = path.join(process.cwd(), "public", "images");
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".svg"]);

const excludedFilenameFragments = [
  "brand-identity-06",
  "brand-identity-09",
  "brand-identity-11",
  "brand-identity-13",
  "brand-identity-17",
  "mobile-app-01",
  "webdev-01",
  "webdev-08",
];

const noisyFilenameTokens = new Set([
  "branddesign",
  "brandidentity",
  "chicstyle",
  "creativedesign",
  "designinspiration",
  "designerwear",
  "digitalproducts",
  "ecommercewebsite",
  "fashionaddict",
  "fashionblogger",
  "fashiondesign",
  "fashionstyle",
  "fiverrfreelancer",
  "landingpage",
  "luxuryf",
  "moderndesign",
  "modernfashion",
  "onlinestore",
  "ootd",
  "outfitinspiration",
  "responsivedesign",
  "shopifydesign",
  "streetstyle",
  "stylegoals",
  "styleinspo",
  "tags",
  "trendylooks",
  "uidesign",
  "uiuxdesign",
  "userexperience",
  "userinterface",
  "uxdesign",
  "webdesign",
  "webdesigner",
  "webdevelopment",
  "websitedesign",
  "websiteinspiration",
]);

const folderCategoryMap: Record<string, PortfolioCategory> = {
  "brand-identity": "Brand Identity",
  "brand-strategy": "Brand Identity",
  "logo-design": "Logo Design",
  "mobile-app": "UI/UX Design",
  "product-design": "UI/UX Design",
  "uiux-design": "UI/UX Design",
  "web-development": "Development",
  "website-design": "Web Design",
};

const categoryFallbackTitles: Record<PortfolioCategory, string> = {
  "Brand Identity": "Brand Identity Project",
  Development: "Development Project",
  "Logo Design": "Logo Design Project",
  "UI/UX Design": "UI/UX Design Project",
  "Web Design": "Website Design Project",
};

export type PortfolioGalleryItem = {
  id: string;
  title: string;
  folder: string;
  category: PortfolioCategory;
  src: string;
  alt: string;
  fit: "contain" | "cover";
};

function normalizeForMatching(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function shouldExcludeImage(filename: string) {
  const normalizedName = normalizeForMatching(filename);

  return excludedFilenameFragments.some((fragment) => normalizedName.includes(normalizeForMatching(fragment)));
}

function titleFromFilename(filename: string, category: PortfolioCategory, index: number) {
  const rawName = path.parse(filename).name.replace(/\.optimized$/i, "");
  const fallbackTitle = `${categoryFallbackTitles[category]} ${String(index + 1).padStart(2, "0")}`;

  if (rawName.includes("#")) {
    return fallbackTitle;
  }

  const title = rawName
    .replace(/[_#]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[^a-zA-Z0-9&+'. -]+/g, " ")
    .replace(/\s+\(\d+\)$/g, "")
    .split(" ")
    .filter((token) => !noisyFilenameTokens.has(normalizeForMatching(token)))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  return title.length > 2 ? title : fallbackTitle;
}

function altFromFilename(filename: string, category: PortfolioCategory, index: number) {
  const title = titleFromFilename(filename, category, index);
  return `${title} ${category.toLowerCase()} portfolio image.`;
}

export function getPortfolioGalleryItems(): readonly PortfolioGalleryItem[] {
  if (!fs.existsSync(portfolioImageRoot)) {
    return [];
  }

  const folders = fs
    .readdirSync(portfolioImageRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((folder) => folder in folderCategoryMap);

  return folders.flatMap((folder) => {
    const category = folderCategoryMap[folder];
    const folderPath = path.join(portfolioImageRoot, folder);

    const entries = fs
      .readdirSync(folderPath, { withFileTypes: true })
      .filter((entry) => entry.isFile())
      .filter((entry) => imageExtensions.has(path.extname(entry.name).toLowerCase()))
      .filter((entry) => !shouldExcludeImage(entry.name));
    const optimizedBaseNames = new Set(
      entries
        .map((entry) => path.parse(entry.name).name)
        .filter((name) => name.endsWith(".optimized"))
        .map((name) => name.replace(/\.optimized$/i, "")),
    );

    return entries
      .filter((entry) => {
        const baseName = path.parse(entry.name).name;
        return baseName.endsWith(".optimized") || !optimizedBaseNames.has(baseName);
      })
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((entry, index) => {
        const title = titleFromFilename(entry.name, category, index);
        const src = `/images/${folder}/${entry.name}`;

        return {
          id: `${folder}/${entry.name}`,
          title,
          folder,
          category,
          src,
          alt: altFromFilename(entry.name, category, index),
          fit: "cover",
        };
      });
  });
}

export function getPortfolioGalleryCategoryCounts(items: readonly PortfolioGalleryItem[]) {
  return items.reduce(
    (counts, item) => ({
      ...counts,
      [item.category]: (counts[item.category] ?? 0) + 1,
    }),
    {} as Partial<Record<PortfolioCategory, number>>,
  );
}
