/**
 * GlowButton — Performance-optimized version.
 * Removed the infinite rotating div + blur filter.
 * Replaced with a static CSS border-glow using box-shadow animation.
 */
export default function GlowButton({ children, href, className = '', onClick, isCircular = false }) {
  const content = (
    <>
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

  const wrapperClass = `relative inline-flex items-center justify-center rounded-full overflow-hidden p-[1.5px] cursor-pointer group transition-all duration-300 glow-btn ${className}`;
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
