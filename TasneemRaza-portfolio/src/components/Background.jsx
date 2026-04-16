import { useEffect, useRef } from 'react';

export default function Background() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, imgData, pixels;

    const resize = () => {
      // Lower resolution scaled up, creating the dreamy blur
      w = Math.floor(window.innerWidth / 2);
      h = Math.floor(window.innerHeight / 2);
      canvas.width = w;
      canvas.height = h;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      imgData = ctx.createImageData(w, h);
      pixels = imgData.data;
    };
    resize();
    window.addEventListener('resize', resize);

    const paint = (t) => {
      const time = t * 0.0004;
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const idx = (y * w + x) * 4;
          const nx = x / w;
          const ny = y / h;

          const wave1 = Math.sin(nx * 8 + ny * 3 + time * 1.2) * 0.35;
          const wave2 = Math.sin(nx * 4 - ny * 6 + time * 0.8) * 0.25;
          const wave3 = Math.sin(nx * 12 + ny * 2 + time * 1.5) * 0.15;
          const wave4 = Math.cos(nx * 6 + ny * 8 - time * 0.6) * 0.20;
          const wave5 = Math.sin(nx * 3 + ny * 10 + time * 0.9) * 0.18;
          const height = wave1 + wave2 + wave3 + wave4 + wave5;

          const eps = 0.003;
          const hR =
            Math.sin((nx+eps)*8+ny*3+time*1.2)*0.35+Math.sin((nx+eps)*4-ny*6+time*0.8)*0.25+
            Math.sin((nx+eps)*12+ny*2+time*1.5)*0.15+Math.cos((nx+eps)*6+ny*8-time*0.6)*0.20+
            Math.sin((nx+eps)*3+ny*10+time*0.9)*0.18;
          const hD =
            Math.sin(nx*8+(ny+eps)*3+time*1.2)*0.35+Math.sin(nx*4-(ny+eps)*6+time*0.8)*0.25+
            Math.sin(nx*12+(ny+eps)*2+time*1.5)*0.15+Math.cos(nx*6+(ny+eps)*8-time*0.6)*0.20+
            Math.sin(nx*3+(ny+eps)*10+time*0.9)*0.18;

          const dx = (hR - height) / eps;
          const dy = (hD - height) / eps;
          const light = (-dx * 0.7 + -dy * 0.7) * 0.5;
          const brightness = 0.5 + light * 0.45;

          // Heavenly pure white/porcelain look, removing the warm/yellow OAT
          const bR = 252, bG = 251, bB = 250; 
          const hiR = 255, hiG = 255, hiB = 255;
          const sR = 232, sG = 229, sB = 224; // PORCELAIN #E8E5E0 as the shadow
          
          let r,g,b;
          if (brightness > 0.5) {
            const t2 = (brightness - 0.5) * 2;
            r = bR + (hiR - bR) * t2;
            g = bG + (hiG - bG) * t2;
            b = bB + (hiB - bB) * t2;
          } else {
            const t2 = (0.5 - brightness) * 2;
            r = bR + (sR - bR) * t2;
            g = bG + (sG - bG) * t2;
            b = bB + (sB - bB) * t2;
          }
          
          pixels[idx] = Math.max(0, Math.min(255, r));
          pixels[idx+1] = Math.max(0, Math.min(255, g));
          pixels[idx+2] = Math.max(0, Math.min(255, b));
          pixels[idx+3] = 255;
        }
      }
      ctx.putImageData(imgData, 0, 0);
      rafRef.current = requestAnimationFrame(paint);
    };

    rafRef.current = requestAnimationFrame(paint);
    return () => { 
      cancelAnimationFrame(rafRef.current); 
      window.removeEventListener('resize', resize); 
    };
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen z-[-1] pointer-events-none">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full" 
        style={{ imageRendering: 'auto' }} 
      />
      {/* Subtle paper noise texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.25] mix-blend-overlay pointer-events-none z-0">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"/>
      </svg>
    </div>
  );
}
