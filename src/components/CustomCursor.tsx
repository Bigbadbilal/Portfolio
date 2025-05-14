'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useSpring(0, {
    stiffness: 1000,
    damping: 50,
    mass: 0.1
  });
  
  const cursorY = useSpring(0, {
    stiffness: 1000,
    damping: 50,
    mass: 0.1
  });

  const ringX = useSpring(0, {
    stiffness: 300,
    damping: 40,
    mass: 0.8
  });
  
  const ringY = useSpring(0, {
    stiffness: 300,
    damping: 40,
    mass: 0.8
  });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('.group') !== null ||
        target.closest('[role="button"]') !== null
      );
    };

    window.addEventListener('mousemove', updatePosition, { passive: true });
    window.addEventListener('mouseover', updateHoverState, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, [cursorX, cursorY, ringX, ringY]);

  return (
    <>
      <motion.div
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: cursorX,
          top: cursorY,
        }}
        initial={false}
      />
      <motion.div
        className={`custom-cursor-ring ${isHovering ? 'hover' : ''}`}
        style={{
          left: ringX,
          top: ringY,
        }}
        initial={false}
      />
    </>
  );
};

export default CustomCursor;