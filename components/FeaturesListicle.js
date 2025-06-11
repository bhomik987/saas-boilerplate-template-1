const features = [
  'Rapid Prototyping with Next.js',
  'Seamless Supabase Integration',
  'Component-Based UI Development',
  'SEO-Friendly Structure',
  'Scalable & Maintainable Codebase',
  'Cost-Effective Backend Solutions',
];

export default function FeaturesListicle() {
  return (
    <section style={{
      background: '#ffffff',
      color: '#1a1a1a',
      padding: '3rem 2rem',
      borderRadius: '12px',
      boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
      maxWidth: 800,
      margin: '2rem auto',
    }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2.5rem', textAlign: 'center', fontWeight: 700, letterSpacing: '-0.03em' }}>Key Advantages</h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {features.map((f, i) => (
          <li key={i} style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#333333',
            display: 'flex',
            alignItems: 'center',
            padding: '0.75rem',
            background: '#fdfdfd',
            borderRadius: '8px',
            border: '1px solid #eeeeee',
            boxShadow: '0 1px 5px rgba(0,0,0,0.02)',
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.75rem' }}><path d="M22 11.08V12a10 10 0 1 1-5.93-8.86"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            {f}
          </li>
        ))}
      </ul>
    </section>
  );
}
