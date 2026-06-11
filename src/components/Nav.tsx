"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nav, site } from "@/lib/content";

const externalLinks = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Resume", href: site.resume },
];

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      className={`h-3 w-3 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M3.5 8.5 L8.5 3.5 M4.5 3.5 H8.5 V7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scroll-spy: highlight the section nearest the viewport center
  useEffect(() => {
    const ids = nav.links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/60 backdrop-blur-xl" : ""
      }`}
    >
      <nav
        aria-label="Primary"
        className="relative mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        {/* left: stacked wordmark */}
        <a href="#top" className="leading-tight">
          <span className="block font-display text-base font-semibold tracking-tight text-fg">
            {site.shortName}
          </span>
          <span className="mt-0.5 block font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
            {site.role}
          </span>
        </a>

        {/* center: segmented pill (lg+) */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 xl:block">
          <ul className="flex items-center gap-0.5 rounded-full border border-border/70 bg-surface/40 p-1 backdrop-blur-xl">
            {nav.links.map((l) => {
              const id = l.href.slice(1);
              const isActive = active === id;
              return (
                <li key={l.href} className="relative">
                  <a
                    href={l.href}
                    className={`relative block rounded-full px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.1em] transition-colors ${
                      isActive ? "text-fg" : "text-muted hover:text-fg"
                    }`}
                  >
                    {isActive && (
                      <>
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.07]"
                          transition={{ type: "spring", stiffness: 420, damping: 34 }}
                        />
                        <motion.span
                          layoutId="nav-tick"
                          className="absolute -top-1 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-cyan"
                          style={{ boxShadow: "0 0 8px var(--color-cyan)" }}
                        />
                      </>
                    )}
                    <span className="relative z-10">{l.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* right: external links (lg+) */}
        <div className="hidden items-center gap-6 xl:flex">
          {externalLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-muted transition-colors hover:text-fg"
            >
              {l.label}
              <ArrowUpRight className="text-faint transition-colors group-hover:text-cyan" />
            </a>
          ))}
        </div>

        {/* mobile toggle (below lg) */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] xl:hidden"
        >
          <span className={`h-px w-5 bg-fg transition-transform duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-fg transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-5 bg-fg transition-transform duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border bg-bg/95 backdrop-blur-xl xl:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {nav.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 font-mono text-sm uppercase tracking-[0.12em] text-muted transition-colors hover:bg-surface hover:text-fg"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex flex-wrap gap-x-6 gap-y-2 border-t border-border px-3 pt-4">
                {externalLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-1 font-mono text-xs uppercase tracking-[0.12em] text-fg transition-colors hover:text-cyan"
                  >
                    {l.label}
                    <ArrowUpRight />
                  </a>
                ))}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
