'use client';

import { useState } from 'react';

const tabs = [
  { label: 'Overview', content: 'This tab provides a general overview of our powerful SaaS features.' },
  { label: 'Analytics', content: 'Dive deep into your data with comprehensive analytics and reporting tools.' },
  { label: 'Settings', content: 'Manage your account settings and preferences here.' },
];

export default function Tabs() {
  const [active, setActive] = useState(0);
  return (
    <section style={{
      background: '#ffffff',
      color: '#1a1a1a',
      padding: '2.5rem 2rem',
      borderRadius: '12px',
      boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
      maxWidth: 800,
      margin: '2rem auto',
    }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 600 }}>Explore Features</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', borderBottom: '1px solid #eeeeee' }}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              background: 'none',
              color: active === i ? '#1a1a1a' : '#555555',
              border: 'none',
              borderBottom: active === i ? '3px solid #1a1a1a' : '3px solid transparent',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              fontWeight: active === i ? 700 : 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease-in-out',
              outline: 'none',
            }}
            onMouseEnter={(e) => { if (active !== i) e.currentTarget.style.color = '#000000'; }}
            onMouseLeave={(e) => { if (active !== i) e.currentTarget.style.color = '#555555'; }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div style={{ padding: '1.5rem', background: '#fdfdfd', borderRadius: '8px', border: '1px solid #eeeeee', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
        <p style={{ lineHeight: 1.6, color: '#333333' }}>{tabs[active].content}</p>
      </div>
    </section>
  );
}
