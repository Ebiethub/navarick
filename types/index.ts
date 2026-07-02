export type NavigationItem = {
  label: string;
  href: `/${string}` | "/";
  description?: string;
};

export type Service = {
  id: "brand-identity" | "web-design" | "web-development" | "ui-ux";
  title: string;
  shortTitle: string;
  description: string;
  outcomes: readonly string[];
};

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  tagline: string;
  locale: string;
  contact: {
    address: {
      street: string;
      city: string;
      state: string;
      stateFull: string;
      postalCode: string;
      country: string;
      formatted: string;
    };
    phone: string;
    phoneHref: string;
    mobile: string;
    mobileHref: string;
  };
  social: {
    facebook: {
      platform: string;
      label: string;
      href: string;
    };
  };
};

export type { Project, ProjectDiscipline, ProjectMedia, ProjectStatus } from "./project";
