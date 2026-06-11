import Section from "./Section";
import Reveal from "./Reveal";
import { education } from "@/lib/content";

export default function Education() {
  return (
    <Section id="education" index="05" eyebrow="Education" heading={education.heading}>
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        {/* degree card */}
        <Reveal className="glow-ring rounded-lg border border-border bg-surface/40 p-7">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-xl font-semibold tracking-tight">
                {education.school}
              </h3>
              <p className="mt-1 text-muted">{education.location}</p>
            </div>
            <span className="label-mono shrink-0">{education.grad}</span>
          </div>

          <p className="mt-4 text-lg text-fg/90">{education.degree}</p>

          <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <p className="font-display text-3xl font-semibold text-glow-cyan">{education.gpa}</p>
              <p className="label-mono mt-1">GPA</p>
            </div>
          </div>

          <p className="mt-6 border-t border-border pt-4 text-sm leading-relaxed text-muted">
            {education.deansList}
          </p>

          <div className="mt-5">
            <p className="label-mono mb-3">Certifications</p>
            <ul className="space-y-2">
              {education.certifications.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-fg/85">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* coursework */}
        <Reveal delay={0.08} className="rounded-lg border border-border bg-surface/40 p-7">
          <p className="label-mono mb-4 text-cyan/80">Relevant Coursework</p>
          <ul className="flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <li
                key={course}
                className="rounded-md border border-border bg-bg/60 px-3 py-1.5 text-sm text-fg/80 transition-colors hover:border-cyan/40 hover:text-cyan"
              >
                {course}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
