import { motion } from 'framer-motion';

export default function GlowButton({ children, href, className = '', onClick, isCircular = false }) {
  const content = (
    <>
      {/* 
        Perfect Framer Replica: 
        1. Parent has dark rim (p-[1.5px]), overflow hidden.
        2. Rotating light strip extending past edges.
        3. Solid inner child blocking the center.
      */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-[-50%] right-[-50%] h-[30px] -translate-y-1/2 z-0"
        style={{
          background: '#E3D5B5', // Oat color glow
          filter: 'blur(10px)',
          opacity: 0.9
        }}
      />
      
      {/* Inner Button Body */}
      <div 
        className={`relative z-10 flex items-center justify-center bg-[#58331E] text-[#E8E5E0] transition-colors duration-300 w-full h-full ${
          isCircular ? 'rounded-full' : 'px-7 py-3 md:px-8 md:py-3.5 rounded-full font-sans text-[14px] md:text-[15px] font-medium tracking-wide'
        }`}
      >
        {children}
      </div>
    </>
  );

  const wrapperClass = `relative inline-flex items-center justify-center rounded-full overflow-hidden p-[1.5px] cursor-pointer group hover:opacity-90 transition-opacity ${className}`;
  const wrapperStyle = { backgroundColor: 'rgba(50,25,10,0.8)' };

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto:')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={wrapperClass} style={wrapperStyle}>
          {content}
        </a>
      );
    }
    return (
      <a href={href} onClick={onClick} className={wrapperClass} style={wrapperStyle}>
        {content}
      </a>
    );
  }

  return (
    <div onClick={onClick} className={wrapperClass} style={wrapperStyle}>
      {content}
    </div>
  );
}
