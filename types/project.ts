export type ProjectDiscipline =
  | "Brand Identity"
  | "Logo Design"
  | "Brand Strategy"
  | "Website Design"
  | "Web Design"
  | "Web Development"
  | "UI/UX Design"
  | "Mobile Apps"
  | "Product Design";

export type ProjectStatus = "draft" | "published" | "archived";

export type ProjectMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: number | null;
  sector: string;
  disciplines: readonly ProjectDiscipline[];
  summary: string;
  excerpt: string;
  status: ProjectStatus;
  featured: boolean;
  cover: ProjectMedia | null;
  overview: string;
  challenge: string;
  research: string;
  strategy: string;
  creativeDirection: string;
  identitySystem: string;
  digitalExperience: string;
  outcome: string;
  gallery: readonly ProjectMedia[];
};
