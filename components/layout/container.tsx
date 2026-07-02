import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type PolymorphicProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

type ContainerWidth = "site" | "reading-wide" | "reading" | "reading-narrow" | "utility";

const widthClasses: Record<ContainerWidth, string> = {
  site: "max-w-site",
  "reading-wide": "max-w-reading-wide",
  reading: "max-w-reading",
  "reading-narrow": "max-w-reading-narrow",
  utility: "max-w-utility",
};

export function SiteContainer<T extends ElementType = "div">({
  as,
  children,
  className,
  width = "site",
  ...props
}: PolymorphicProps<T> & { width?: ContainerWidth }) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn("mx-auto w-full px-[var(--container-gutter)]", widthClasses[width], className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export function SiteSection<T extends ElementType = "section">({
  as,
  children,
  className,
  compact = false,
  ...props
}: PolymorphicProps<T> & { compact?: boolean }) {
  const Component = as ?? "section";

  return (
    <Component className={cn(compact ? "py-section-compact" : "py-section", className)} {...props}>
      {children}
    </Component>
  );
}

export function SiteGrid<T extends ElementType = "div">({
  as,
  children,
  className,
  ...props
}: PolymorphicProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "grid grid-cols-4 gap-x-4 md:grid-cols-8 md:gap-x-5 lg:grid-cols-12 wide:gap-x-6",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
