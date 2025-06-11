export default function ButtonLead({ children = 'Lead', ...props }) {
  return (
    <button
      style={{
        background: '#1a1a1a',
        color: '#ffffff',
        border: 'none',
        padding: '0.8rem 2rem',
        borderRadius: '8px',
        fontSize: '1rem',
        fontWeight: 600,
        cursor: 'pointer',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.2s ease-in-out',
        outline: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = '#000000')}
      onMouseLeave={(e) => (e.currentTarget.style.background = '#1a1a1a')}
      {...props}
    >
      {children}
    </button>
  );
}
