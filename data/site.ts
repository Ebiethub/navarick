import type { SiteConfig } from "@/types";

export const site = {
  name: "NAVARICK",
  title: "NAVARICK - Premium Brand Identity, Web Design & UI/UX Studio",
  description:
    "NAVARICK is a premium creative studio creating distinctive brand identities, modern websites, and intuitive digital experiences for ambitious businesses.",
  tagline: "Brand and digital systems made with clarity, restraint, and purpose.",
  locale: "en_US",
  contact: {
    address: {
      street: "1942 Broadway St., Ste 314C",
      city: "Boulder",
      state: "CO",
      stateFull: "Colorado",
      postalCode: "80302",
      country: "United States",
      formatted: "1942 Broadway St., Ste 314C, Boulder, CO 80302",
    },
    phone: "307-677-7843",
    phoneHref: "tel:+13076777843",
    mobile: "307-630-9813",
    mobileHref: "tel:+13076309813",
  },
  social: {
    facebook: {
      platform: "Facebook",
      label: "Bountyloop Designs",
      href: "https://www.facebook.com/Bountyloopdesigns",
    },
  },
} as const satisfies SiteConfig;
