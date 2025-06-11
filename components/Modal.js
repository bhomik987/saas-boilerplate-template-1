export default function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.6)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000,
      opacity: 0,
      animation: 'fadeIn 0.3s forwards',
    }}>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
      <div style={{
        background: '#ffffff',
        color: '#1a1a1a',
        padding: '2.5rem 2rem',
        borderRadius: '12px',
        minWidth: '350px',
        maxWidth: '90vw',
        position: 'relative',
        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
        animation: 'slideIn 0.3s forwards',
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 15, right: 15,
            background: 'none', border: 'none',
            color: '#555555',
            fontSize: '1.75rem',
            cursor: 'pointer',
            padding: '0',
            lineHeight: '1',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#1a1a1a')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#555555')}
        >&times;</button>
        {children}
      </div>
    </div>
  );
}
