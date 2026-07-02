"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { primaryNavigation } from "@/data/navigation";
import { site } from "@/data/site";
import { DURATION, EASE, mobileMenuItem, mobileMenuPanel } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const isStickyRef = useRef(false);
  const scrollFrameRef = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const menuId = useId();

  useEffect(() => {
    const updateSticky = () => {
      scrollFrameRef.current = null;
      const nextSticky = window.scrollY >= 72;

      if (isStickyRef.current !== nextSticky) {
        isStickyRef.current = nextSticky;
        setIsSticky(nextSticky);
      }
    };
    const requestStickyUpdate = () => {
      if (scrollFrameRef.current === null) {
        scrollFrameRef.current = requestAnimationFrame(updateSticky);
      }
    };

    updateSticky();
    window.addEventListener("scroll", requestStickyUpdate, { passive: true });

    return () => {
      window.removeEventListener("scroll", requestStickyUpdate);
      if (scrollFrameRef.current !== null) {
        cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    document.body.toggleAttribute("data-menu-open", isMenuOpen);

    return () => {
      document.body.removeAttribute("data-menu-open");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const isActiveRoute = (href: string) => (href === "/" ? pathname === href : pathname.startsWith(href));

  return (
    <motion.header
      animate={{ opacity: 1, y: 0 }}
      className={cn("site-header", isSticky && "is-sticky")}
      initial={prefersReducedMotion ? false : { opacity: 0, y: -20 }}
      transition={
        prefersReducedMotion
          ? { duration: 0.01 }
          : { duration: DURATION.medium, ease: EASE.out }
      }
    >
      <div className="site-header__shell">
        <Link className="site-header__wordmark focus-ring" href="/" onClick={closeMenu}>
          <span>{site.name}</span>
        </Link>

        <nav className="site-header__desktop-nav" aria-label="Primary navigation">
          {primaryNavigation.map((item) => {
            const isCurrent = isActiveRoute(item.href);

            return (
              <Link
                aria-current={isCurrent ? "page" : undefined}
                className="site-header__link focus-ring"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
          <Link className="site-header__cta focus-ring" href="/contact">
            <span>Start a Project</span>
            <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
          </Link>
        </nav>

        <button
          aria-controls={menuId}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="site-header__menu-button focus-ring"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          <span className="site-header__menu-label">Menu</span>
          {isMenuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            aria-hidden={false}
            animate={prefersReducedMotion ? { opacity: 1 } : "visible"}
            className="mobile-menu is-open"
            exit={prefersReducedMotion ? { opacity: 0 } : "exit"}
            id={menuId}
            initial={prefersReducedMotion ? { opacity: 0 } : "hidden"}
            variants={mobileMenuPanel}
          >
            <nav aria-label="Mobile navigation" className="mobile-menu__nav">
              {primaryNavigation.map((item) => {
                const isCurrent = isActiveRoute(item.href);

                return (
                  <motion.div key={item.href} variants={mobileMenuItem}>
                    <Link
                      aria-current={isCurrent ? "page" : undefined}
                      className="mobile-menu__link focus-ring"
                      href={item.href}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div variants={mobileMenuItem}>
                <Link className="mobile-menu__cta focus-ring" href="/contact" onClick={closeMenu}>
                  <span>Start a Project</span>
                  <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
