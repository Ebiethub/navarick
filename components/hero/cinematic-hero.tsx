"use client";

import { motion, useReducedMotion } from "framer-motion";

import { HeroBackgroundVideo } from "./hero-background-video";

const ease = [0.22, 1, 0.36, 1] as const;
const headingWords = ["BUILDING", "BRANDS", "REMEMBERED"] as const;
const disciplines = ["Brand Identity", "Web Design", "Development", "UI/UX Design"] as const;

// Replaceable credibility counters until NAVARICK approves/verifies final public claims.
const heroStats = [
  { value: "+14", label: ["Years of", "Brand Craft"] },
  { value: "+4000", label: ["Identities", "Shaped"] },
  { value: "+4", label: ["Core", "Disciplines"] },
] as const;

function getMotionProps(prefersReducedMotion: boolean) {
  return {
    initial: prefersReducedMotion ? false : { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: prefersReducedMotion ? { duration: 0.01 } : { duration: 0.6, ease },
  };
}

export function CinematicHero() {
  const prefersReducedMotion = useReducedMotion();
  const fadeUp = getMotionProps(Boolean(prefersReducedMotion));

  return (
    <section className="hero-editorial" aria-labelledby="hero-title">
      <HeroBackgroundVideo />

      <div className="hero-editorial__inner">
        <motion.div className="hero-editorial__stats" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.16 }}>
          {heroStats.map((stat, index) => (
            <motion.div
              className="hero-stat"
              key={stat.value}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0.01 }
                  : { delay: 0.18 + index * 0.12, duration: 0.6, ease }
              }
            >
              <span className="hero-stat__value">{stat.value}</span>
              <span className="hero-stat__label">
                {stat.label.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="hero-editorial__bottom">
          <motion.div className="hero-editorial__row hero-editorial__row--top" {...fadeUp}>
            <p className="hero-editorial__disciplines" aria-label="Brand Identity, Web Design, Development, UI/UX Design">
              {disciplines.map((discipline) => (
                <span key={discipline}>{discipline}</span>
              ))}
            </p>
          </motion.div>

          <div className="hero-editorial__row hero-editorial__row--main">
            <motion.p className="hero-editorial__description" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.28 }}>
              Premium creative studio shaping memorable brands, modern websites, and intuitive
              digital experiences.
            </motion.p>
            <h1
              className="hero-editorial__heading"
              id="hero-title"
              aria-label="Building Brands Remembered."
            >
              {headingWords.map((word, index) => (
                <span className="hero-editorial__heading-mask" key={word}>
                  <motion.span
                    className="hero-editorial__heading-word"
                    initial={prefersReducedMotion ? false : { y: "110%" }}
                    animate={{ y: 0 }}
                    transition={
                      prefersReducedMotion
                        ? { duration: 0.01 }
                        : { delay: 0.4 + index * 0.14, duration: 0.7, ease }
                    }
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
