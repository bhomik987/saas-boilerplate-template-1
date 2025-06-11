"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../libs/supabaseClient';
import { motion } from 'framer-motion';
import { sharedStyles } from '../../../styles';
import Link from 'next/link';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is already signed in
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        router.push('/dashboard');
      }
    };
    checkUser();
  }, [router]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;
      router.push('/auth/verify-email'); // Redirect to a verification page
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setError(null);
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      });
      if (error) throw error;
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: sharedStyles.colors.background,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          ...sharedStyles.card.base,
          width: '100%',
          maxWidth: '400px',
          textAlign: 'center',
        }}
      >
        <h2 style={{
          ...sharedStyles.typography.heading,
          fontSize: '2rem',
          marginBottom: '1.5rem',
          color: sharedStyles.colors.primary,
        }}>
          Sign Up
        </h2>
        
        <form onSubmit={handleSignUp} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: `1px solid ${sharedStyles.colors.accent.purple}`,
              ...sharedStyles.typography.body,
              boxShadow: `2px 2px 0px 0px ${sharedStyles.colors.primary}`,
              transition: 'all 0.2s ease-in-out',
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: `1px solid ${sharedStyles.colors.accent.purple}`,
              ...sharedStyles.typography.body,
              boxShadow: `2px 2px 0px 0px ${sharedStyles.colors.primary}`,
              transition: 'all 0.2s ease-in-out',
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: `1px solid ${sharedStyles.colors.accent.purple}`,
              ...sharedStyles.typography.body,
              boxShadow: `2px 2px 0px 0px ${sharedStyles.colors.primary}`,
              transition: 'all 0.2s ease-in-out',
            }}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: `1px solid ${sharedStyles.colors.accent.purple}`,
              ...sharedStyles.typography.body,
              boxShadow: `2px 2px 0px 0px ${sharedStyles.colors.primary}`,
              transition: 'all 0.2s ease-in-out',
            }}
          />
          <motion.button
            type="submit"
            whileHover={sharedStyles.animations.cardHover}
            disabled={loading}
            style={{
              ...sharedStyles.button.base,
              backgroundColor: sharedStyles.colors.accent.purple,
              color: sharedStyles.colors.secondary,
              width: '100%',
              marginTop: '0.5rem',
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </motion.button>
        </form>

        {error && (
          <div style={{
            color: '#dc2626',
            marginTop: '1rem',
            textAlign: 'center',
            padding: '0.75rem',
            background: '#fee2e2',
            borderRadius: '6px',
            fontSize: '0.95rem',
          }}>
            {error}
          </div>
        )}

        <div style={{
          textAlign: 'center',
          margin: '1.5rem 0',
          color: '#6b7280',
          position: 'relative',
        }}>
          <span style={{
            background: sharedStyles.colors.background,
            padding: '0 1rem',
            position: 'relative',
            zIndex: 1,
          }}>
            or
          </span>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            height: '1px',
            background: '#e5e7eb',
            zIndex: 0,
          }} />
        </div>

        <motion.button
          type="button"
          onClick={handleGoogleSignUp}
          disabled={loading}
          whileHover={sharedStyles.animations.cardHover}
          style={{
            ...sharedStyles.button.base,
            backgroundColor: sharedStyles.colors.accent.rose,
            color: sharedStyles.colors.secondary,
            width: '100%',
            marginTop: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Sign up with Google
        </motion.button>

        <p style={{
          ...sharedStyles.typography.body,
          marginTop: '1.5rem',
          color: '#4a5568',
        }}>
          Already have an account? {' '}
          <Link href="/auth/signin" style={{
            color: sharedStyles.colors.accent.blue,
            textDecoration: 'none',
            fontWeight: '600',
          }}>
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
} 