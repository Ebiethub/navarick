import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export function TextLink({ className, children, ...props }: ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      className={cn(
        "group inline-flex items-center gap-2 text-navigation text-[var(--color-text-primary)] transition duration-fast ease-navarick-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-action)]",
        className,
      )}
      {...props}
    >
      <span className="bg-[linear-gradient(var(--color-action),var(--color-action))] bg-[length:0_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-fast ease-navarick-out group-hover:bg-[length:100%_1px]">
        {children}
      </span>
    </Link>
  );
}
