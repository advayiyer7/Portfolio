"use client";

import { motion, useReducedMotion } from "framer-motion";

// A task graph with its critical path picked out — the object of my
// scheduling research, drawn like a paper figure rather than decoration.
const NODES = [
  { id: "t0", x: 60, y: 210 },
  { id: "t1", x: 250, y: 90 },
  { id: "t2", x: 270, y: 250 },
  { id: "t3", x: 470, y: 160 },
  { id: "t4", x: 520, y: 300 },
  { id: "t5", x: 700, y: 110 },
  { id: "t6", x: 740, y: 240 },
  { id: "t7", x: 930, y: 180 },
  { id: "t8", x: 1120, y: 220 },
] as const;

const EDGES: [string, string][] = [
  ["t0", "t1"],
  ["t0", "t2"],
  ["t1", "t3"],
  ["t2", "t3"],
  ["t2", "t4"],
  ["t3", "t5"],
  ["t3", "t6"],
  ["t4", "t6"],
  ["t5", "t7"],
  ["t6", "t7"],
  ["t7", "t8"],
];

const CRITICAL = new Set(["t0-t2", "t2-t3", "t3-t6", "t6-t7", "t7-t8"]);
const CRITICAL_NODES = new Set(["t0", "t2", "t3", "t6", "t7", "t8"]);

const at = (id: string) => NODES.find((n) => n.id === id)!;

export default function ScheduleDag() {
  const reduced = useReducedMotion();

  return (
    <svg
      viewBox="0 0 1200 360"
      preserveAspectRatio="xMidYMax meet"
      className="h-full w-full"
      aria-hidden
    >
      {EDGES.map(([a, b]) => {
        const p = at(a);
        const q = at(b);
        const critical = CRITICAL.has(`${a}-${b}`);
        return (
          <motion.line
            key={`${a}-${b}`}
            x1={p.x}
            y1={p.y}
            x2={q.x}
            y2={q.y}
            stroke={critical ? "var(--color-accent)" : "var(--color-border)"}
            strokeWidth={critical ? 1.5 : 1}
            initial={reduced ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9, delay: critical ? 0.5 : 0.2, ease: "easeOut" }}
          />
        );
      })}
      {NODES.map((n) => (
        <g key={n.id}>
          <circle
            cx={n.x}
            cy={n.y}
            r={4.5}
            fill={CRITICAL_NODES.has(n.id) ? "var(--color-accent)" : "var(--color-bg)"}
            stroke={CRITICAL_NODES.has(n.id) ? "var(--color-accent)" : "var(--color-muted)"}
            strokeWidth={1}
          />
          <text
            x={n.x + 10}
            y={n.y - 8}
            fill="var(--color-faint)"
            fontFamily="var(--font-mono)"
            fontSize="11"
          >
            {n.id}
          </text>
        </g>
      ))}
      <text
        x="1190"
        y="348"
        textAnchor="end"
        fill="var(--color-faint)"
        fontFamily="var(--font-mono)"
        fontSize="11"
        letterSpacing="0.14em"
      >
        TASK GRAPH · CRITICAL PATH
      </text>
    </svg>
  );
}
