import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { getProject, projects, site } from "@/lib/content";
import Reveal from "@/components/Reveal";
import ScrollLine from "@/components/ScrollLine";
import StackShowcase from "@/components/project/StackShowcase";
import Footer from "@/components/Footer";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.filter((p) => p.detail).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.detail) return {};
  const title = `${project.title} — ${site.name}`;
  const description = project.detail.oneLiner;
  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
    twitter: { card: "summary_large_image", title, description },
  };
}

function Block({
  index,
  label,
  title,
  children,
}: {
  index: string;
  label: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-border/50 py-14 sm:py-16">
      <Reveal>
        <div className="mb-7 flex items-center gap-3">
          <span className="label-mono text-cyan/80">{index}</span>
          <span className="h-px w-8 bg-border" />
          <span className="label-mono">{label}</span>
        </div>
        {title && (
          <h2 className="mb-7 max-w-2xl font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
        )}
      </Reveal>
      <Reveal delay={0.05}>{children}</Reveal>
    </section>
  );
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.detail || !project.logo) notFound();
  const d = project.detail;

  return (
    <>
      <ScrollLine />

      {/* minimal sticky top bar */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="leading-tight">
            <span className="block font-display text-base font-semibold tracking-tight text-fg">
              {site.shortName}
            </span>
            <span className="mt-0.5 block font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
              {site.role}
            </span>
          </Link>
          <Link
            href="/#projects"
            className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-muted transition-colors hover:text-fg"
          >
            ← Back to work
          </Link>
        </div>
      </header>

      <main>
        {/* hero */}
        <section className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-dot-grid mask-radial-fade opacity-50" />
          <div className="glow-blob animate-pulse-glow left-[8%] top-0 h-72 w-72 bg-cyan/15" />
          <div className="glow-blob animate-pulse-glow right-[6%] top-[20%] h-72 w-72 bg-violet/15" style={{ animationDelay: "1.5s" }} />

          <div className="relative mx-auto max-w-5xl">
            <Reveal>
              <div className="flex items-center gap-5">
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  width={76}
                  height={76}
                  priority
                  className="rounded-2xl"
                  style={{ filter: "drop-shadow(0 0 28px rgba(77,224,240,0.5))" }}
                />
                <div>
                  <span className="label-mono">{d.type}</span>
                  <h1 className="mt-1.5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                    {project.title}
                  </h1>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">{d.oneLiner}</p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.links?.map((l, i) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      i === 0
                        ? "rounded-full bg-cyan px-6 py-2.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
                        : "rounded-full border border-border bg-surface/60 px-6 py-2.5 text-sm font-medium text-fg backdrop-blur transition-colors hover:border-cyan/50 hover:text-cyan"
                    }
                    style={i === 0 ? { boxShadow: "0 0 28px -4px var(--color-cyan)" } : undefined}
                  >
                    {l.label === "Live" ? "View Live" : l.label} {l.label === "Download" ? "↓" : "↗"}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Block index="01" label="Overview">
            <div className="max-w-3xl space-y-4">
              {d.overview.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
          </Block>

          <Block index="02" label="What it does">
            <div className="grid gap-4 sm:grid-cols-2">
              {d.features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-lg border border-border bg-surface/30 p-5 transition-colors duration-300 hover:border-cyan/40"
                >
                  <h3 className="font-display text-lg font-semibold tracking-tight">{f.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{f.body}</p>
                </div>
              ))}
            </div>
          </Block>

          <Block index="03" label="How it works">
            <div className="grid gap-4 sm:grid-cols-2">
              {d.howItWorks.map((h, i) => (
                <div key={h.title} className="rounded-lg border border-border bg-surface/30 p-5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-cyan/70">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-display text-lg font-semibold tracking-tight">{h.title}</h3>
                  </div>
                  <p className="mt-2 leading-relaxed text-muted">{h.body}</p>
                </div>
              ))}
            </div>
          </Block>

          <Block index="04" label="Stack">
            <p className="mb-6 max-w-3xl leading-relaxed text-muted">{d.stackIntro}</p>
            <StackShowcase stack={d.stack} />
          </Block>

          <Block index="05" label="Architecture">
            {/* terminal-style flow */}
            <div className="overflow-hidden rounded-lg border border-border bg-bg/70">
              <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2 label-mono">system flow</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[0.72rem] leading-relaxed text-fg/85 sm:text-sm">
                {d.architecture}
              </pre>
            </div>
            <dl className="mt-5 grid gap-3 sm:grid-cols-2">
              {d.architectureNotes.map((n) => (
                <div key={n.label} className="rounded-lg border border-border bg-surface/30 p-4">
                  <dt className="label-mono text-cyan/80">{n.label}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted">{n.body}</dd>
                </div>
              ))}
            </dl>
          </Block>

          <Block index="06" label="My role">
            <p className="max-w-3xl text-lg leading-relaxed text-muted">{d.roleDetail}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-border pt-8">
              {project.links?.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-wide text-fg transition-colors hover:text-cyan"
                >
                  {l.label} ↗
                </a>
              ))}
              <Link
                href="/#projects"
                className="font-mono text-xs uppercase tracking-wide text-muted transition-colors hover:text-fg"
              >
                ← Back to all work
              </Link>
            </div>
          </Block>
        </div>
      </main>

      <Footer />
    </>
  );
}
