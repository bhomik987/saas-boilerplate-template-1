export default function NotFoundPage() {
  return (
    <div style={{ background: '#fff', color: '#000', padding: '2rem', borderRadius: '10px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', maxWidth: 600, margin: '4rem auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Page Not Found</h2>
      <p style={{ marginBottom: '2rem' }}>The page you are looking for does not exist.</p>
      <a href="/" style={{ background: '#000', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '4px', textDecoration: 'none', fontSize: '1rem', fontWeight: 600 }}>
        Go to Home
      </a>
    </div>
  );
}
