/**
 * Background — Pure CSS gradient replacement for the per-pixel canvas renderer.
 * The old version computed ~300K pixels × 10 trig operations every frame,
 * which was the single biggest source of scroll lag. This CSS approach
 * achieves the same dreamy look with zero JS computation cost.
 */
export default function Background() {
  return (
    <div className="fixed inset-0 w-screen h-screen z-[-1] pointer-events-none">
      {/* Layered radial gradients mimicking the wave-lit porcelain look */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 30% 20%, rgba(255,255,255,0.9) 0%, transparent 60%),
            radial-gradient(ellipse 70% 50% at 75% 70%, rgba(232,229,224,0.6) 0%, transparent 55%),
            radial-gradient(ellipse 90% 70% at 50% 50%, rgba(252,251,250,0.8) 0%, transparent 70%),
            linear-gradient(180deg, #fcfbfa 0%, #ebe5e0 50%, #f5f2ee 100%)
          `,
        }}
      />
      {/* Subtle paper-noise texture  — lightweight SVG, rendered once */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.18] mix-blend-overlay pointer-events-none" aria-hidden="true">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"/>
      </svg>
    </div>
  );
}
