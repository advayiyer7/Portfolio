import Section from "./Section";
import Reveal from "./Reveal";
import { skills } from "@/lib/content";

export default function Skills() {
  return (
    <Section id="skills" index="03" eyebrow="Skills" heading="The toolkit.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, gi) => (
          <Reveal
            key={group.category}
            delay={(gi % 3) * 0.07}
            className="group rounded-lg border border-border bg-surface/40 p-6 transition-colors duration-300 hover:border-accent/40"
          >
            <h3 className="label-mono mb-4 text-accent/80">{group.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-bg/60 px-3 py-1.5 text-sm text-fg/85 transition-all duration-300 hover:border-accent/50 hover:text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
