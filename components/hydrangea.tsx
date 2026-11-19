type Floret = { x: number; y: number; r: number; hue: number; rot: number };

function buildFlorets(count: number): Floret[] {
  const golden = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: count }, (_, i) => {
    const radius = Math.sqrt((i + 0.5) / count) * 92;
    const angle = i * golden;
    // Round so server (Node) and browser produce identical strings,
    // otherwise React reports a hydration mismatch.
    const round = (n: number) => Math.round(n * 100) / 100;
    return {
      x: round(100 + Math.cos(angle) * radius),
      y: round(100 + Math.sin(angle) * radius),
      r: 9 + (i % 4) * 1.6,
      hue: i % 5,
      rot: (i * 37) % 90,
    };
  });
}

const FLORETS = buildFlorets(58);
const TINTS = ["#f2dcd6", "#e6b9b6", "#cf8a90", "#b5555f", "#8f2f42"];

export function Hydrangea({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {FLORETS.map((f, i) => (
        <g key={i} transform={`translate(${f.x} ${f.y}) rotate(${f.rot})`}>
          {[0, 90, 180, 270].map((a) => (
            <ellipse
              key={a}
              cx="0"
              cy={-f.r * 0.55}
              rx={f.r * 0.42}
              ry={f.r * 0.6}
              transform={`rotate(${a})`}
              fill={TINTS[f.hue]}
              opacity="0.9"
              stroke="#6b1d2d"
              strokeOpacity="0.12"
              strokeWidth="0.4"
            />
          ))}
          <circle r={f.r * 0.14} fill="#b48e57" />
        </g>
      ))}
    </svg>
  );
}
