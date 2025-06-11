export default function Card({ title, children, style = {} }) {
  return (
    <div style={{
      background: '#1a1a1a',
      color: '#ffffff',
      padding: '1.5rem',
      borderRadius: '10px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      ...style
    }}>
      {title && <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600, color: '#f0f0f0' }}>{title}</h3>}
      {children}
    </div>
  );
} 