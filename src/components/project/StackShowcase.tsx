import type { StackGroup } from "@/lib/content";

/**
 * "Pretty cool" stack display:
 *  1) an infinite marquee strip of every technology (edge-faded), and
 *  2) a glowing, grouped breakdown by category.
 */
export default function StackShowcase({ stack }: { stack: StackGroup[] }) {
  const all = stack.flatMap((g) => g.items);

  return (
    <div>
      {/* marquee strip */}
      <div className="mask-edges-x relative overflow-hidden rounded-lg border border-border bg-surface/30 py-4">
        <div className="flex w-max animate-marquee gap-3 pr-3">
          {[...all, ...all].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex shrink-0 items-center gap-2 rounded-md border border-border bg-bg/60 px-3.5 py-1.5 font-mono text-sm text-fg/85"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_var(--color-cyan)]" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* grouped breakdown */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((group) => (
          <div
            key={group.label}
            className="rounded-lg border border-border bg-surface/30 p-5 transition-colors duration-300 hover:border-cyan/40"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_var(--color-cyan)]" />
              <span className="label-mono text-cyan/80">{group.label}</span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-bg/60 px-2.5 py-1 font-mono text-xs text-fg/85 transition-all duration-300 hover:border-cyan/50 hover:text-cyan hover:shadow-[0_0_16px_-4px_var(--color-cyan)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
