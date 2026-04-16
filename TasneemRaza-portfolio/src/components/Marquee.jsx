const projects = [
  { src: '/public/img1.png', label: 'Landing Page' },
  { src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&h=400&q=80', label: 'Web App' },
  { src: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=600&h=400&q=80', label: 'UI Design' },
  { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&h=400&q=80', label: 'Mobile App' },
  { src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&h=400&q=80', label: 'Creative' },
  { src: 'https://images.unsplash.com/photo-1581291518633-83b4eef1d2fa?auto=format&fit=crop&w=600&h=400&q=80', label: 'Dashboard' },
  { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&h=400&q=80', label: 'Cafe Website' },
  { src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=600&h=400&q=80', label: 'Brand Identity' },
];

const doubled = [...projects, ...projects];

export default function Marquee() {
  return (
    <section
      className="relative w-full overflow-hidden py-16 md:py-24"
      style={{
        background: 'radial-gradient(ellipse at 50% 40%, rgba(227,214,181,0.15) 0%, #f5f2ee 60%, #f5f2ee 100%)',
      }}
    >
      {/* ── Atmospheric background fog ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[15%] w-[50vw] h-[50vw] rounded-full bg-white/30 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-oat/15 blur-[100px]" />
      </div>

      {/* ── Heavenly cloudy fade: Left ── */}
      <div
        className="absolute left-0 top-0 bottom-0 w-32 md:w-52 z-30 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, #f5f2ee 15%, rgba(245,242,238,0.8) 50%, transparent 100%)',
        }}
      />
      {/* ── Heavenly cloudy fade: Right ── */}
      <div
        className="absolute right-0 top-0 bottom-0 w-32 md:w-52 z-30 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, #f5f2ee 15%, rgba(245,242,238,0.8) 50%, transparent 100%)',
        }}
      />

      {/* ── Depth layer: blurred slower row behind ── */}
      <div className="relative z-0 mb-[-60px] opacity-30">
        <div
          className="flex w-max gap-6 md:gap-10"
          style={{
            animation: 'marquee-primary 45s linear infinite',
            filter: 'blur(8px)',
            willChange: 'transform',
          }}
        >
          {doubled.map((p, i) => (
            <div
              key={`depth-${i}`}
              className="flex-shrink-0 w-[240px] md:w-[340px] h-[160px] md:h-[220px] rounded-3xl overflow-hidden"
            >
              <img src={p.src} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* ── Primary marquee row ── */}
      <div className="marquee-track relative z-10" style={{ animation: 'float-gentle 10s ease-in-out infinite' }}>
        <div
          className="flex w-max gap-6 md:gap-10"
          style={{
            animation: 'marquee-primary 28s linear infinite',
            willChange: 'transform',
          }}
        >
          {doubled.map((p, i) => (
            <div key={`main-${i}`} className="group flex-shrink-0 relative">
              {/* Image card */}
              <div
                className="w-[280px] md:w-[380px] lg:w-[440px] h-[180px] md:h-[250px] lg:h-[280px] rounded-[22px] overflow-hidden transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-110"
                style={{
                  boxShadow: '0 8px 40px rgba(88,51,30,0.08), 0 2px 12px rgba(0,0,0,0.04)',
                }}
              >
                <img
                  src={p.src}
                  alt={p.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />

                {/* Glassmorphic overlay on hover */}
                <div
                  className="absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: '0 0 60px rgba(227,214,181,0.2), inset 0 0 30px rgba(255,255,255,0.05)',
                  }}
                />
              </div>

              {/* Floating label */}
              <div
                className="absolute bottom-4 left-4 px-4 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-0 translate-y-2"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                }}
              >
                <span className="font-serif text-sm text-white/90 italic tracking-wide">
                  {p.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Glassmorphic floating container overlay ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <div
          className="w-[90vw] md:w-[80vw] h-[200px] md:h-[280px] rounded-[28px]"
          style={{
            background: 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(1.5px)',
            WebkitBackdropFilter: 'blur(1.5px)',
            border: '1px solid rgba(255,255,255,0.15)',
            boxShadow: '0 8px 60px rgba(227,214,181,0.08), inset 0 1px 0 rgba(255,255,255,0.1)',
          }}
        />
      </div>
    </section>
  );
}
