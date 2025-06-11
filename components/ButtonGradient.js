export default function ButtonGradient({ children = 'Gradient', ...props }) {
  return (
    <button
      style={{
        background: 'linear-gradient(45deg, #1a1a1a 0%, #555555 100%)',
        color: '#ffffff',
        border: 'none',
        padding: '0.8rem 2rem',
        borderRadius: '8px',
        fontSize: '1rem',
        fontWeight: 600,
        cursor: 'pointer',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
        transition: 'all 0.2s ease-in-out',
        outline: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = 'linear-gradient(45deg, #000000 0%, #333333 100%)')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'linear-gradient(45deg, #1a1a1a 0%, #555555 100%)')}
      {...props}
    >
      {children}
    </button>
  );
}
