import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop devices with fine pointer
    if (window.matchMedia('(pointer: fine)').matches) {
      setIsVisible(true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if target is clickable
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = 
          target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.closest('button') !== null || 
          target.closest('a') !== null ||
          target.classList.contains('cursor-pointer') ||
          target.getAttribute('role') === 'button';
        setIsPointer(isClickable);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let animationFrameId: number;

    const follow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(follow);
    };

    animationFrameId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Center sharp dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full bg-white -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isPointer ? 0.5 : 1})`,
        }}
      />
      {/* Smooth trailing glow circle */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full -translate-x-1/2 -translate-y-1/2 border border-purple-400/40 transition-all duration-100 ease-out"
        style={{
          width: isPointer ? '48px' : '28px',
          height: isPointer ? '48px' : '28px',
          transform: `translate3d(${trailingPos.x - (isPointer ? 24 : 14)}px, ${trailingPos.y - (isPointer ? 24 : 14)}px, 0)`,
          backgroundColor: isPointer ? 'rgba(139, 92, 246, 0.15)' : 'transparent',
          boxShadow: isPointer ? '0 0 20px rgba(139, 92, 246, 0.4)' : 'none',
        }}
      />
    </>
  );
};
