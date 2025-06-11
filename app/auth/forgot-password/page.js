"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../../libs/supabaseClient'
import { motion } from 'framer-motion'
import { sharedStyles } from '../../../styles'
import Link from 'next/link'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      })

      if (error) throw error
      setSuccess(true)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

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
          Forgot Password
        </h2>
        
        {success ? (
          <div style={{
            color: '#16a34a',
            marginTop: '1rem',
            textAlign: 'center',
            padding: '0.75rem',
            background: '#dcfce7',
            borderRadius: '6px',
            fontSize: '0.95rem',
          }}>
            Check your email for a password reset link.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: `1px solid ${sharedStyles.colors.accent.rose}`,
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
                backgroundColor: sharedStyles.colors.accent.blue,
                color: sharedStyles.colors.secondary,
                width: '100%',
                marginTop: '0.5rem',
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              {loading ? 'Sending...' : 'Reset Password'}
            </motion.button>
          </form>
        )}

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

        <p style={{
          ...sharedStyles.typography.body,
          marginTop: '1.5rem',
          color: '#4a5568',
        }}>
          Remember your password? {' '}
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
  )
} 