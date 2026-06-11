import type { ReactNode } from "react";
import Reveal from "./Reveal";

/** Consistent section shell: anchor id, mono eyebrow label, heading, content. */
export default function Section({
  id,
  index,
  eyebrow,
  heading,
  children,
  className = "",
}: {
  id: string;
  index: string;
  eyebrow: string;
  heading: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-28 ${className}`}
    >
      <Reveal>
        <div className="mb-3 flex items-center gap-3">
          <span className="label-mono text-accent/80">{index}</span>
          <span className="h-px w-8 bg-border" />
          <span className="label-mono">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-12 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {heading}
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
