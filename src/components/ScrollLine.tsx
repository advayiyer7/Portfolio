"use client";

import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";

/**
 * A vertical "throughline" pinned to the left gutter that draws downward as the
 * page scrolls, with a leading dot. Visible on mobile and desktop.
 */
export default function ScrollLine() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // smooth the progress (skip the spring when reduced motion is requested)
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });
  const progress = reduced ? scrollYProgress : smooth;
  const height = useTransform(progress, (v) => `${v * 100}%`);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-3 top-0 z-30 h-screen w-px sm:left-6 lg:left-8"
    >
      {/* faint full-height track */}
      <div className="absolute inset-0 bg-border/60" />

      {/* progress fill */}
      <motion.div
        style={{ height }}
        className="absolute inset-x-0 top-0 bg-gradient-to-b from-accent to-accent-deep"
      >
        <span className="absolute -bottom-px left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent" />
      </motion.div>
    </div>
  );
}
