import Section from "./Section";
import Reveal from "./Reveal";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <Section id="experience" index="02" eyebrow="Experience" heading="The path so far.">
      <ol className="relative">
        {/* vertical track */}
        <span
          aria-hidden="true"
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-border to-transparent sm:left-[9px]"
        />
        {experience.map((job, i) => (
          <Reveal as="li" key={`${job.org}-${job.role}`} delay={(i % 4) * 0.05}>
            <div className="relative grid grid-cols-[auto_1fr] gap-x-5 pb-12 last:pb-0 sm:gap-x-7">
              {/* node */}
              <div className="relative mt-1.5 flex h-4 w-4 items-center justify-center sm:h-5 sm:w-5">
                <span className="absolute h-4 w-4 rounded-full bg-accent/20 sm:h-5 sm:w-5" />
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    job.current ? "bg-accent" : "bg-faint"
                  }`}
                />
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-semibold tracking-tight sm:text-xl">
                    {job.role}
                  </h3>
                  <span className="label-mono shrink-0">{job.period}</span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-accent/90">
                  {job.org}
                  {job.location ? <span className="text-muted"> · {job.location}</span> : null}
                </p>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">{job.summary}</p>
                {job.tags && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-md border border-border bg-bg/50 px-2 py-0.5 font-mono text-[0.7rem] uppercase tracking-wide text-muted"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
