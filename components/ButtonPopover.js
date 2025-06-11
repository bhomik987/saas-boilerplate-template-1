import { useState } from 'react';

export default function ButtonPopover({ children = 'Popover', popoverText = 'Popover content', ...props }) {
  const [open, setOpen] = useState(false);
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
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
        onClick={() => setOpen(o => !o)}
        {...props}
      >
        {children}
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 10px)', left: '50%', transform: 'translateX(-50%)',
          background: '#ffffff', color: '#1a1a1a', border: '1px solid #eeeeee', borderRadius: '8px', padding: '1rem 1.2rem', minWidth: '180px', zIndex: 10,
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          fontSize: '0.9rem',
          lineHeight: 1.5,
          textAlign: 'center',
          animation: 'popIn 0.2s ease-out forwards',
        }}>
          {popoverText}
          <style jsx>{`
            @keyframes popIn {
              from { opacity: 0; transform: translate(-50%, -10px); }
              to { opacity: 1; transform: translate(-50%, 0); }
            }
          `}</style>
        </div>
      )}
    </span>
  );
}
