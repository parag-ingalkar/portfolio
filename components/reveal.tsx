"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

/**
 * Motion helpers.
 *
 * Per the impeccable craft floor: "one authored moment, not scattered effects
 * and not one identical entrance on every section." These helpers are used
 * sparingly - the hero entrance, and purposeful hover/press on interactive
 * elements. Section content is static and arrives already visible.
 */

/** A calm entrance for the hero block only. Staggered, exponential ease-out. */
export function HeroEntrance({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.05 },
    },
  };
  const item: Variants = {
    hidden: reduce ? {} : { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="contents"
    >
      <HeroEntranceItem>{children}</HeroEntranceItem>
    </motion.div>
  );
}

/**
 * Internal: renders each direct child as a motion item so the hero's headline,
 * paragraph, and CTAs stagger in together. Accepts a fragment of children.
 */
function HeroEntranceItem({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const item: Variants = {
    hidden: reduce ? {} : { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const kids = React.Children.toArray(children);
  return (
    <>
      {kids.map((kid, i) => (
        <motion.div key={i} variants={item} className="contents">
          {kid}
        </motion.div>
      ))}
    </>
  );
}
