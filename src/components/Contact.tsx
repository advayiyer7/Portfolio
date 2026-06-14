import Reveal from "./Reveal";
import { contact, site } from "@/lib/content";

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "GitHub", value: "github.com/advayiyer7", href: site.github },
  { label: "LinkedIn", value: "in/advayiyer7", href: site.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden scroll-mt-24 py-28 sm:py-36">
      {/* dot-grid backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-dot-grid mask-radial-fade opacity-40" />

      <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="label-mono mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-accent/60" />
            05 / Contact
            <span className="h-px w-8 bg-accent/60" />
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {contact.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-5 max-w-md text-lg text-muted">{contact.body}</p>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href={`mailto:${site.email}`}
            className="mt-9 inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
          >
            {site.email}
          </a>
        </Reveal>

        <Reveal delay={0.28}>
          <ul className="mx-auto mt-12 grid max-w-xl gap-3 sm:grid-cols-3">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block rounded-xl border border-border bg-surface/40 px-4 py-4 transition-all duration-300 hover:border-accent/45"
                >
                  <span className="label-mono block text-accent/80">{c.label}</span>
                  <span className="mt-1 block text-sm text-fg/85">{c.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
