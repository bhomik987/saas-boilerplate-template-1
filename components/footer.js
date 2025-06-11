"use client";
import { motion } from 'framer-motion';
import { sharedStyles } from '../styles';
import Link from 'next/link';

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
                backgroundColor: sharedStyles.colors.primary,
                color: sharedStyles.colors.secondary,
                padding: '1.5rem 2rem',
                borderTop: '1px solid #333333',
                textAlign: 'center',
                fontSize: '0.9rem',
                boxShadow: '0 -2px 8px rgba(0,0,0,0.05)',
            }}
        >
            <small style={{ ...sharedStyles.typography.body }}>&copy; {new Date().getFullYear()} SaaS Boilerplate. All rights reserved.</small>
            <div style={{ marginTop: '0.5rem' }}>
                <Link href="/privacy-policy" style={{
                    ...sharedStyles.typography.body,
                    color: sharedStyles.colors.secondary,
                    textDecoration: 'none',
                    transition: 'color 0.2s ease-in-out',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = sharedStyles.colors.accent.blue)}
                onMouseLeave={(e) => (e.currentTarget.style.color = sharedStyles.colors.secondary)}
                >
                    Privacy Policy
                </Link>
                <span style={{ margin: '0 0.75rem' }}>|</span>
                <Link href="/tos" style={{
                    ...sharedStyles.typography.body,
                    color: sharedStyles.colors.secondary,
                    textDecoration: 'none',
                    transition: 'color 0.2s ease-in-out',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = sharedStyles.colors.accent.blue)}
                onMouseLeave={(e) => (e.currentTarget.style.color = sharedStyles.colors.secondary)}
                >
                    Terms of Service
                </Link>
            </div>
        </motion.footer>
    );
}
