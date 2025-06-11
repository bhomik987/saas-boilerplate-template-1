'use client';
import { useRouter } from 'next/navigation';

export default function VerifyEmailPage() {
  const router = useRouter();

  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f8f9fa',
      padding: '1rem'
    }}>
      <div style={{ 
        maxWidth: 400, 
        width: '100%',
        background: '#fff', 
        color: '#000', 
        borderRadius: '12px', 
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
        padding: '2.5rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          background: '#dcfce7',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem'
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-8.86" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>

        <h2 style={{ 
          fontSize: '1.8rem',
          marginBottom: '1rem',
          color: '#166534'
        }}>
          Check your email
        </h2>

        <p style={{ 
          color: '#4b5563',
          marginBottom: '2rem',
          lineHeight: 1.6
        }}>
          We&apos;ve sent you an email with a link to verify your account. 
          Please check your inbox and click the link to continue.
        </p>

        <button
          onClick={() => router.push('/auth/signin')}
          style={{
            background: '#22c55e',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#16a34a'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#22c55e'}
        >
          Return to Sign In
        </button>
      </div>
    </div>
  );
} 