import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type MediaFrameProps = ComponentPropsWithoutRef<"figure"> & {
  caption?: string;
};

export function MediaFrame({ caption, children, className, ...props }: MediaFrameProps) {
  return (
    <figure className={cn("m-0 overflow-hidden", className)} {...props}>
      <div className="overflow-hidden bg-[var(--color-canvas-tonal)]">{children}</div>
      {caption ? (
        <figcaption className="mt-3 max-w-reading text-caption text-[var(--color-text-secondary)]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
