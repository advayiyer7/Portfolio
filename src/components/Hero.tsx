"use client";

import { motion, useReducedMotion } from "framer-motion";
import { about, site } from "@/lib/content";
import ScheduleDag from "./ScheduleDag";
import SocialIcons from "./SocialIcons";

const ease = [0.22, 0.61, 0.36, 1] as const;

export default function Hero() {
  const reduced = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease, delay },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pb-8 pt-16 sm:px-8"
    >
      {/* background layers */}
      <div className="pointer-events-none absolute inset-0 bg-dot-grid mask-radial-fade opacity-60" />
      {/* task-graph figure — subtle, pinned to the very bottom band */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[16%] opacity-20">
        <ScheduleDag />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* opening — centered */}
        <div className="flex flex-col items-center text-center">
          <motion.div {...rise(0.04)}>
            <span className="inline-flex items-center border-l-2 border-accent bg-surface/40 px-3.5 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted">
              Open to SWE / AI-ML internships &amp; full-time roles · 2027
            </span>
          </motion.div>

          <motion.h1
            {...rise(0.12)}
            className="mt-3 font-display text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl lg:text-[3.4rem]"
          >
            {site.name}
          </motion.h1>

          {/* CTAs */}
          <motion.div {...rise(0.22)} className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
            >
              View Projects
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-surface/60 px-5 py-2.5 text-sm font-medium text-fg backdrop-blur transition-colors hover:border-accent/60 hover:text-accent"
            >
              Resume
            </a>
            <SocialIcons className="ml-1" />
          </motion.div>
        </div>

        {/* continues: bio + stats (the former About) */}
        <div id="about" className="mt-6 scroll-mt-24 border-t border-border/60 pt-5">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
            <div className="space-y-3">
              {about.body.map((p, i) => (
                <motion.p
                  key={i}
                  {...rise(0.4 + i * 0.06)}
                  className="text-[0.9rem] leading-[1.5] text-muted"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <motion.dl
              {...rise(0.5)}
              className="grid grid-cols-2 gap-x-6 gap-y-1 self-start lg:grid-cols-1 lg:gap-0"
            >
              {about.stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-col gap-0.5 py-2.5 lg:flex-row lg:items-baseline lg:justify-between ${
                    i > 0 ? "lg:border-t lg:border-border" : ""
                  }`}
                >
                  <dd className="font-display text-2xl font-semibold text-accent lg:text-3xl">
                    {s.value}
                  </dd>
                  <dt className="label-mono lg:text-right">{s.label}</dt>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </div>
    </section>
  );
}
