'use client';

import { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';

export default function ProgressBarDemo() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const startProgress = () => {
    setIsLoading(true);
    setProgress(0);
    
    // Simulate progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setIsLoading(false);
      }
    }, 50);
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '2rem',
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    }}>
      <h2 style={{ 
        fontSize: '1.8rem', 
        marginBottom: '1.5rem', 
        color: '#166534',
        textAlign: 'center'
      }}>
        Progress Bar Demo
      </h2>

      <div style={{ marginBottom: '2rem' }}>
        <ProgressBar
          progress={progress}
          color="#22c55e"
          height={10}
          showPercentage={true}
          animated={true}
        />
      </div>

      <button
        onClick={startProgress}
        disabled={isLoading}
        style={{
          background: isLoading ? '#9ca3af' : '#22c55e',
          color: '#ffffff',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          fontSize: '1rem',
          fontWeight: 600,
          cursor: isLoading ? 'not-allowed' : 'pointer',
          opacity: isLoading ? 0.7 : 1,
          display: 'block',
          margin: '0 auto',
          transition: 'all 0.2s ease-in-out',
        }}
        onMouseEnter={(e) => {
          if (!isLoading) {
            e.currentTarget.style.background = '#16a34a';
          }
        }}
        onMouseLeave={(e) => {
          if (!isLoading) {
            e.currentTarget.style.background = '#22c55e';
          }
        }}
      >
        {isLoading ? 'Loading...' : 'Start Progress'}
      </button>
    </div>
  );
} 