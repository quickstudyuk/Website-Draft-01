'use client';

import React, { useEffect, useState } from 'react';

export default function CursorLight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999, // ensures it sits above mostly everything but ignores pointer events
      }}
    >
      <div 
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          width: '400px',
          height: '400px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 60%)',
          borderRadius: '50%',
          transition: 'transform 0.1s ease-out, left 0.1s ease-out, top 0.1s ease-out', // smooth follow
        }}
      />
    </div>
  );
}
