"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section";
import { projects, type Project } from "@/lib/content";

const statusStyle: Record<Project["status"], string> = {
  "In progress": "text-accent-deep border-accent-deep/40 bg-accent-deep/5",
  "Details soon": "text-muted border-border bg-bg/50",
  Live: "text-accent border-accent/40 bg-accent/5",
};

function Card({ project, index }: { project: Project; index: number }) {
  const reduced = useReducedMotion();
  const href = project.detail ? `/projects/${project.slug}` : undefined;

  return (
    <motion.article
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1], delay: (index % 2) * 0.08 }}
      whileHover={reduced ? undefined : { y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-surface/40 p-7 transition-colors duration-300 hover:border-accent/45"
    >
      {/* thumbnail — cover screenshot if present, else placeholder */}
      <ThumbWrap href={href} title={project.title}>
        <div className="relative aspect-[16/9] overflow-hidden rounded-md border border-border bg-bg/60">
          {project.cover ? (
            <Image
              src={project.cover}
              alt={`${project.title} screenshot`}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-dot-grid">
              <span className="label-mono text-faint">screenshot soon</span>
            </div>
          )}
        </div>
      </ThumbWrap>

      <div className="relative mt-6 flex flex-1 flex-col">
        <div className="mb-2 flex items-center justify-between gap-3">
          <h3 className="font-display text-xl font-semibold tracking-tight">
            {href ? (
              <Link href={href} className="transition-colors hover:text-accent">
                {project.title}
              </Link>
            ) : (
              project.title
            )}
          </h3>
          <span
            className={`shrink-0 rounded-md border px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-wide ${statusStyle[project.status]}`}
          >
            {project.status}
          </span>
        </div>
        <p className="mb-4 leading-relaxed text-muted">{project.tagline}</p>

        <ul className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border bg-bg/50 px-2 py-0.5 font-mono text-[0.68rem] uppercase tracking-wide text-muted"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-border pt-4">
          {href && (
            <Link
              href={href}
              className="font-mono text-xs uppercase tracking-wide text-accent transition-colors hover:text-fg"
            >
              Case study →
            </Link>
          )}
          {project.links?.length
            ? project.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-wide text-fg transition-colors hover:text-accent"
                >
                  {l.label} ↗
                </a>
              ))
            : !href && (
                <span className="font-mono text-xs uppercase tracking-wide text-faint">
                  Links coming soon
                </span>
              )}
        </div>
      </div>
    </motion.article>
  );
}

function ThumbWrap({
  href,
  title,
  children,
}: {
  href?: string;
  title: string;
  children: React.ReactNode;
}) {
  if (!href) return <>{children}</>;
  return (
    <Link href={href} aria-label={`${title} case study`} className="block">
      {children}
    </Link>
  );
}

export default function Projects() {
  return (
    <Section id="projects" index="04" eyebrow="Projects" heading="Selected work.">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Card key={p.slug} project={p} index={i} />
        ))}
      </div>
      <p className="mt-8 label-mono text-faint">
        {"// more case studies, links & screenshots landing soon"}
      </p>
    </Section>
  );
}
