"use client";

import { useMemo, useState } from "react";

import { categoryDisciplineMap, type PortfolioCategory } from "@/data/portfolio-media";
import type { PortfolioGalleryItem } from "@/lib/portfolio-gallery";
import { PortfolioMediaCard } from "./portfolio-media-card";

type WorkGalleryProps = {
  items: readonly PortfolioGalleryItem[];
};

const categories = Object.keys(categoryDisciplineMap) as PortfolioCategory[];

export function WorkGallery({ items }: WorkGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("Logo Design");
  const categoryCounts = useMemo(
    () =>
      items.reduce(
        (counts, item) => ({
          ...counts,
          [item.category]: (counts[item.category] ?? 0) + 1,
        }),
        {} as Partial<Record<PortfolioCategory, number>>,
      ),
    [items],
  );
  const visibleItems = useMemo(
    () => items.filter((item) => item.category === activeCategory),
    [activeCategory, items],
  );

  return (
    <>
      <section className="work-filter premium-section" aria-labelledby="work-filter-title">
        <div className="work-shell work-filter__inner">
          <h2 className="work-filter__title" id="work-filter-title">
            Project categories
          </h2>
          <div className="work-filter__controls" aria-label="Project category filter">
            {categories.map((category) => (
              <button
                aria-pressed={activeCategory === category}
                className="work-filter__button"
                disabled={!categoryCounts[category]}
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
                <span>{categoryCounts[category] ?? 0}</span>
              </button>
            ))}
          </div>
          <p aria-live="polite">
            Showing {visibleItems.length} of {items.length} visual references
          </p>
        </div>
      </section>

      <section className="work-list premium-section" aria-labelledby="work-list-title">
        <div className="work-shell">
          <div className="portfolio-category">
            <div className="portfolio-category__header">
              <p className="work-label">{visibleItems.length} references</p>
              <h3 id="work-list-title">{activeCategory}</h3>
            </div>
            <div className="portfolio-category__grid portfolio-category__grid--gallery">
              {visibleItems.map((item) => (
                <article
                  aria-label={`${item.category}: ${item.title}`}
                  className="portfolio-card portfolio-card--media-only"
                  key={item.id}
                >
                  <PortfolioMediaCard
                    fit="cover"
                    media={item}
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 30vw"
                    variant="logo"
                  />
                  <div className="portfolio-card__content">
                    <p className="work-label">{item.category}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
