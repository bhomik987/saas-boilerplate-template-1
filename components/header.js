"use client";
import { motion } from 'framer-motion';
import { sharedStyles } from '../styles';
import Link from 'next/link';

export default function Header() {
  return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                backgroundColor: sharedStyles.colors.secondary,
                color: sharedStyles.colors.primary,
      padding: '1.2rem 2rem',
      borderBottom: '1px solid #f0f0f0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                position: 'sticky',
                top: 0,
                zIndex: 100,
            }}
        >
            <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                style={{
                    ...sharedStyles.typography.heading,
                    margin: 0,
                    fontSize: '1.8rem',
                }}
            >
                <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        SaaS Boilerplate
                </Link>
            </motion.h1>

      <nav>
                <ul style={{
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                    display: 'flex',
                    gap: '1.5rem',
                }}>
                    <li>
                        <Link href="/pricing" style={{
                            ...sharedStyles.typography.body,
                            color: sharedStyles.colors.primary,
                            textDecoration: 'none',
                            fontWeight: '500',
                            transition: 'color 0.2s ease-in-out',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = sharedStyles.colors.accent.blue)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = sharedStyles.colors.primary)}
                        >
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" style={{
                            ...sharedStyles.typography.body,
                            color: sharedStyles.colors.primary,
                            textDecoration: 'none',
                            fontWeight: '500',
                            transition: 'color 0.2s ease-in-out',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = sharedStyles.colors.accent.blue)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = sharedStyles.colors.primary)}
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/auth/signin" style={{
                            ...sharedStyles.typography.body,
                            color: sharedStyles.colors.primary,
                            textDecoration: 'none',
                            fontWeight: '500',
                            transition: 'color 0.2s ease-in-out',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = sharedStyles.colors.accent.blue)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = sharedStyles.colors.primary)}
                        >
                            Sign In
                        </Link>
                    </li>
        </ul>
      </nav>
        </motion.header>
  );
}
