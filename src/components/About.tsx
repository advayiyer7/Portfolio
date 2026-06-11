import Section from "./Section";
import Reveal from "./Reveal";
import { about } from "@/lib/content";

export default function About() {
  return (
    <Section id="about" index="01" eyebrow="About" heading="Engineer at the AI / systems seam.">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="space-y-5">
          {about.body.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-lg leading-relaxed text-muted">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <dl className="grid grid-cols-3 gap-4 lg:grid-cols-1 lg:gap-0">
            {about.stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col gap-1 py-4 lg:flex-row lg:items-baseline lg:justify-between ${
                  i > 0 ? "lg:border-t lg:border-border" : ""
                }`}
              >
                <dd className="font-display text-3xl font-semibold text-accent lg:text-4xl">
                  {s.value}
                </dd>
                <dt className="label-mono lg:text-right">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
