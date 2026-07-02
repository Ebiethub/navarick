import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type TextRole =
  | "hero"
  | "page"
  | "editorial"
  | "h1"
  | "h2"
  | "h3"
  | "subheading"
  | "body-large"
  | "body"
  | "body-strong"
  | "caption"
  | "navigation"
  | "label"
  | "micro";

const roleClasses: Record<TextRole, string> = {
  hero: "text-hero",
  page: "text-page-display",
  editorial: "font-display text-editorial-display",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  subheading: "text-subheading",
  "body-large": "text-body-large",
  body: "text-body",
  "body-strong": "text-body-strong",
  caption: "text-caption",
  navigation: "text-navigation",
  label: "text-label uppercase",
  micro: "text-micro uppercase",
};

type PolymorphicTextProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  role?: TextRole;
  tone?: "primary" | "secondary" | "muted" | "accent" | "chrome";
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const toneClasses = {
  primary: "text-[var(--color-text-primary)]",
  secondary: "text-[var(--color-text-secondary)]",
  muted: "text-[var(--color-text-disabled)]",
  accent: "text-[var(--color-accent)]",
  chrome: "text-[var(--color-metadata)]",
};

export function Text<T extends ElementType = "p">({
  as,
  children,
  className,
  role = "body",
  tone = "primary",
  ...props
}: PolymorphicTextProps<T>) {
  const Component = as ?? "p";

  return (
    <Component className={cn(roleClasses[role], toneClasses[tone], className)} {...props}>
      {children}
    </Component>
  );
}
