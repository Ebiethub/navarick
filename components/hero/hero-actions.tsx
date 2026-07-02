import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function HeroActions() {
  return (
    <div className="hero-actions" aria-label="Hero actions">
      <Link className="hero-actions__primary focus-ring" href="/work">
        <span>View Selected Work</span>
        <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
      </Link>
      <Link className="hero-actions__secondary focus-ring" href="/contact">
        <span>Start a Project</span>
        <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
      </Link>
    </div>
  );
}
