'use client';

export default function ErrorPage({ error, reset }) {
  return (
    <div style={{ background: '#fff', color: '#000', padding: '2rem', borderRadius: '10px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', maxWidth: 600, margin: '4rem auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Something went wrong!</h1>
      <p style={{ marginBottom: '1.5rem' }}>{error.message}</p>
      <button
        onClick={() => reset()}
        style={{
          background: '#000',
          color: '#fff',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '4px',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
      >
        Try again
      </button>
    </div>
  );
}
