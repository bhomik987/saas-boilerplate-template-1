'use client';

import { useEffect, useState } from 'react';

export default function ProgressBar({ 
  progress = 0, 
  color = '#22c55e', // Green color
  height = 8,
  showPercentage = true,
  animated = true,
  style = {}
}) {
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    if (animated) {
      // Smoothly animate to the target progress
      const duration = 500; // Animation duration in ms
      const startTime = Date.now();
      const startProgress = displayProgress;
      const progressDiff = progress - startProgress;

      const animate = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeProgress = progress < 0.5 
          ? 4 * progress * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        setDisplayProgress(startProgress + (progressDiff * easeProgress));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    } else {
      setDisplayProgress(progress);
    }
  }, [progress, animated]);

  return (
    <div style={{ width: '100%', ...style }}>
      <div style={{
        width: '100%',
        height: height,
        backgroundColor: '#e5f5e5', // Light green background
        borderRadius: height / 2,
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div style={{
          width: `${displayProgress}%`,
          height: '100%',
          backgroundColor: color,
          borderRadius: height / 2,
          transition: animated ? 'none' : 'width 0.3s ease-in-out',
        }} />
      </div>
      {showPercentage && (
        <div style={{
          marginTop: '0.5rem',
          fontSize: '0.875rem',
          color: '#166534', // Dark green text
          textAlign: 'right',
          fontWeight: 500,
        }}>
          {Math.round(displayProgress)}%
        </div>
      )}
    </div>
  );
} 