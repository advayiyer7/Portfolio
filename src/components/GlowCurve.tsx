"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * The signature "throughline" — a glowing curved line that flows across the
 * hero like an annotated line chart on a dark grid.
 *
 * - draws itself in on mount (pathLength 0 → 1)
 * - a short bright pulse travels along it continuously (pathOffset loop)
 * - glowing marker dots sit exactly ON the curve (measured via getPointAtLength)
 * - respects prefers-reduced-motion: renders a static, fully-drawn curve
 */

// The curve. viewBox is 1200×560; the path reads left→right like a data line.
const CURVE_D =
  "M -20 400 C 150 400 230 250 380 250 C 520 250 560 150 700 150 C 820 150 850 320 980 300 C 1120 278 1160 170 1240 150";

// fractions along the path length where annotated markers sit
const MARKERS = [
  { t: 0.26, label: "agents" },
  { t: 0.55, label: "systems" },
  { t: 0.82, label: "shipped" },
];

type Pt = { x: number; y: number; label: string };

export default function GlowCurve({ showLabels = true }: { showLabels?: boolean } = {}) {
  const reduced = useReducedMotion();
  const pathRef = useRef<SVGPathElement>(null);
  const [points, setPoints] = useState<Pt[]>([]);

  // measure exact on-curve coordinates for the markers
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const total = path.getTotalLength();
    setPoints(
      MARKERS.map((m) => {
        const p = path.getPointAtLength(total * m.t);
        return { x: p.x, y: p.y, label: m.label };
      }),
    );
  }, []);

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1200 560"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {/* stroke gradient: cyan → blue → violet */}
        <linearGradient id="curveGrad" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4DE0F0" />
          <stop offset="55%" stopColor="#5B8CFF" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        {/* bloom */}
        <filter id="curveGlow" x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="dotGlow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      {/* hidden measuring path (un-styled, used only for getPointAtLength) */}
      <path ref={pathRef} d={CURVE_D} stroke="none" fill="none" />

      {/* faint full-length track */}
      <path d={CURVE_D} stroke="#1d2740" strokeWidth="1.5" fill="none" />

      {/* main glowing line — draws in on mount */}
      <motion.path
        d={CURVE_D}
        stroke="url(#curveGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        filter="url(#curveGlow)"
        initial={reduced ? { pathLength: 1 } : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 2.2, ease: [0.4, 0, 0.2, 1] },
          opacity: { duration: 0.4 },
        }}
      />

      {/* traveling bright pulse along the line (continuous) */}
      {!reduced && (
        <motion.path
          d={CURVE_D}
          stroke="#bdf4ff"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          filter="url(#curveGlow)"
          pathLength={0.1}
          initial={{ pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: [0, 1], opacity: [0, 1, 1, 0.2] }}
          transition={{
            pathOffset: { duration: 4.5, ease: "linear", repeat: Infinity, delay: 1.6 },
            opacity: { duration: 4.5, ease: "linear", repeat: Infinity, delay: 1.6 },
          }}
        />
      )}

      {/* annotated marker dots, exactly on the curve */}
      {points.map((p, i) => (
        <motion.g
          key={p.label}
          initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: reduced ? 0 : 1.4 + i * 0.28, duration: 0.5, ease: "backOut" }}
          style={{ transformOrigin: `${p.x}px ${p.y}px` }}
        >
          {/* soft halo */}
          <circle cx={p.x} cy={p.y} r="9" fill="#4DE0F0" opacity="0.25" filter="url(#dotGlow)" />
          {!reduced && (
            <circle cx={p.x} cy={p.y} r="6" fill="none" stroke="#4DE0F0" strokeWidth="1.5">
              <animate attributeName="r" values="6;15;6" dur="2.8s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;0;0.7" dur="2.8s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
            </circle>
          )}
          <circle cx={p.x} cy={p.y} r="4" fill="#eafdff" />
          {showLabels && (
            <text
              x={p.x}
              y={p.y - 16}
              textAnchor="middle"
              className="hidden sm:block"
              fill="#8a93a8"
              fontSize="11"
              fontFamily="var(--font-mono)"
              letterSpacing="2"
              style={{ textTransform: "uppercase" }}
            >
              {p.label}
            </text>
          )}
        </motion.g>
      ))}
    </svg>
  );
}
