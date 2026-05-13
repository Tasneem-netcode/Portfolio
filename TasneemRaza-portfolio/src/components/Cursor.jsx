import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Custom cursor — optimized to use raw DOM manipulation instead of
 * Framer Motion springs, which were triggering React re-renders on every mouse move.
 */
export default function Cursor() {
  const dotRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(true);
  const isHoveredRef = useRef(false);
  
  useEffect(() => {
    const checkIsDesktop = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsDesktop(!isTouchDevice && window.matchMedia("(pointer: fine)").matches);
    };
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const dot = dotRef.current;
    if (!dot) return;

    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let rafId = null;

    const lerp = (start, end, t) => start + (end - start) * t;

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.15);
      currentY = lerp(currentY, targetY, 0.15);
      dot.style.transform = `translate3d(${currentX - 5}px, ${currentY - 5}px, 0)`;
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const onOver = (e) => {
      const isClickable = e.target.closest('a, button, [role="button"]');
      const hovered = !!isClickable;
      if (hovered !== isHoveredRef.current) {
        isHoveredRef.current = hovered;
        dot.style.width = hovered ? '24px' : '10px';
        dot.style.height = hovered ? '24px' : '10px';
        dot.style.opacity = hovered ? '0.6' : '0.9';
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
      style={{
        width: '10px',
        height: '10px',
        backgroundColor: 'var(--color-gold)',
        opacity: 0.9,
        willChange: 'transform',
        transition: 'width 0.2s, height 0.2s, opacity 0.2s',
      }}
    />
  );
}
