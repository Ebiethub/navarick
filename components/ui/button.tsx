import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-[var(--radius-control)] px-6 text-navigation transition-[background,border-color,box-shadow,color,transform] duration-fast ease-navarick-out hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-action)] disabled:pointer-events-none disabled:translate-y-0 disabled:opacity-45 motion-reduce:transform-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-action)] text-[var(--color-action-foreground)] hover:bg-[var(--color-action-subtle)]",
        secondary:
          "border border-[var(--border-default)] bg-transparent text-[var(--color-text-primary)] hover:border-[var(--border-strong)] hover:bg-[var(--color-surface)]",
        ghost:
          "text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]",
      },
      size: {
        sm: "h-10 px-4",
        md: "h-12 px-6",
        lg: "h-14 px-7",
        icon: "h-12 w-12 px-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, type = "button", ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      type={type}
      {...props}
    />
  );
}
