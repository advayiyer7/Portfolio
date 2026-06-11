"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero, site } from "@/lib/content";
import GlowCurve from "./GlowCurve";
import SocialIcons from "./SocialIcons";

// split the headline so accent phrases get the neon glow
function renderHeadline(text: string, accents: readonly string[]) {
  const escaped = accents.map((a) => a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`(${escaped.join("|")})`, "g");
  return text.split(re).map((chunk, i) =>
    accents.includes(chunk) ? (
      <span key={i} className="text-glow-cyan">
        {chunk}
      </span>
    ) : (
      <span key={i}>{chunk}</span>
    ),
  );
}

const ease = [0.22, 0.61, 0.36, 1] as const;

export default function Hero() {
  const reduced = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease, delay },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pb-24 pt-28 text-center sm:px-8"
    >
      {/* background layers — calm, centered */}
      <div className="pointer-events-none absolute inset-0 bg-dot-grid mask-radial-fade opacity-60" />
      <div className="glow-blob animate-pulse-glow left-1/2 top-1/3 h-[520px] w-[680px] -translate-x-1/2 -translate-y-1/2 bg-blue/15" />

      {/* signature curve — pinned to the lower band as a clean background accent */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] opacity-50">
        <GlowCurve showLabels={false} />
      </div>

      {/* centered content */}
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center">
        <motion.div {...rise(0.04)} className="mb-7">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/50 px-4 py-1.5 font-mono text-[0.72rem] tracking-wide text-muted backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_10px_2px_var(--color-cyan)]" />
            Open to SWE / AI-ML internships &amp; full-time roles · 2027
          </span>
        </motion.div>

        <motion.h1
          {...rise(0.12)}
          className="font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.25rem]"
        >
          {site.name}
        </motion.h1>

        <motion.p
          {...rise(0.24)}
          className="mt-6 max-w-2xl font-display text-xl font-medium leading-snug tracking-tight text-fg/90 sm:text-2xl"
        >
          {renderHeadline(hero.headline, hero.accentWords)}
        </motion.p>

        <motion.p
          {...rise(0.32)}
          className="mt-5 max-w-xl text-base leading-relaxed text-muted"
        >
          {hero.subline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...rise(0.42)}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
            style={{ boxShadow: "0 0 28px -4px var(--color-cyan)" }}
          >
            View Projects
          </a>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-medium text-fg backdrop-blur transition-colors hover:border-cyan/50 hover:text-cyan"
          >
            Resume
          </a>
        </motion.div>

        {/* social row */}
        <motion.div {...rise(0.5)} className="mt-8">
          <SocialIcons className="justify-center" />
        </motion.div>
      </div>

      {/* scroll cue — thin animated down arrow */}
      <motion.a
        href="#about"
        aria-label="Scroll to content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-fg"
      >
        <motion.svg
          width="22"
          height="36"
          viewBox="0 0 22 36"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          animate={reduced ? undefined : { y: [0, 7, 0] }}
          transition={reduced ? undefined : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <line x1="11" y1="2" x2="11" y2="29" strokeLinecap="round" />
          <path d="M4 23 L11 31 L18 23" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </motion.a>
    </section>
  );
}
