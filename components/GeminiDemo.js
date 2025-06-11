'use client';

import { useState } from 'react';
import ProgressBar from './ProgressBar';
import { generateWithProgress } from '../libs/gemini';

export default function GeminiDemo() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setProgress(0);
    setError(null);
    setResult('');

    try {
      const text = await generateWithProgress(prompt, (progress) => {
        setProgress(progress);
      });
      setResult(text);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
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
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#1a1a1a' }}>
        Gemini AI Demo
      </h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#666666' }}>
            Enter your prompt:
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            style={{
              width: '100%',
              minHeight: '100px',
              padding: '0.75rem',
              borderRadius: '8px',
              border: '1px solid #dddddd',
              fontSize: '1rem',
              resize: 'vertical',
            }}
            placeholder="Type your prompt here..."
            disabled={isLoading}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || !prompt.trim()}
          style={{
            background: isLoading ? '#cccccc' : '#1a1a1a',
            color: '#ffffff',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? 0.7 : 1,
          }}
        >
          {isLoading ? 'Generating...' : 'Generate'}
        </button>
      </form>

      {isLoading && (
        <div style={{ marginBottom: '2rem' }}>
          <ProgressBar
            progress={progress}
            color="#1a1a1a"
            height={8}
            showPercentage={true}
            animated={true}
          />
        </div>
      )}

      {error && (
        <div style={{
          padding: '1rem',
          background: '#fff0f0',
          color: '#ff0000',
          borderRadius: '8px',
          marginBottom: '1rem',
        }}>
          Error: {error}
        </div>
      )}

      {result && (
        <div style={{
          padding: '1.5rem',
          background: '#f8f8f8',
          borderRadius: '8px',
          whiteSpace: 'pre-wrap',
          lineHeight: 1.6,
        }}>
          {result}
        </div>
      )}
    </div>
  );
} 