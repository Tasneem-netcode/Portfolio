import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function Cursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true); // default to true to not miss initial render if it mounts after hydration, but will be set by useEffect.
  
  const mouseX = useSpring(0, { stiffness: 400, damping: 25 });
  const mouseY = useSpring(0, { stiffness: 400, damping: 25 });

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
    
    const mouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const isClickable = e.target.closest('a, button, [role="button"]');
      setIsHovered(!!isClickable);
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isDesktop]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 bg-gold rounded-full pointer-events-none z-[9999]"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%'
      }}
      initial={{ width: 10, height: 10 }}
      animate={{
        width: isHovered ? 24 : 10,
        height: isHovered ? 24 : 10,
        opacity: isHovered ? 0.6 : 0.9
      }}
      transition={{ duration: 0.2 }}
    />
  );
}
