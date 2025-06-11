"use client"
import { motion } from 'framer-motion';
import { sharedStyles } from '../styles';

export default function CTA() {
    return (
        <div style={{
            backgroundColor: sharedStyles.colors.background,
            padding: '4rem 2rem',
            position: 'relative',
            textAlign: 'center',
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    ...sharedStyles.card.base,
                    maxWidth: '80rem',
                    margin: '0 auto',
                    padding: '3rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                <motion.h2
                    style={{
                        ...sharedStyles.typography.heading,
                        fontSize: '2.5rem',
                        textAlign: 'center',
                        marginBottom: '3rem',
                        color: sharedStyles.colors.primary,
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Ready to Get Started?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    style={{
                        ...sharedStyles.typography.body,
                        fontSize: '1.25rem',
                        marginBottom: '2.5rem',
                        color: '#4a5568',
                        maxWidth: '600px',
                        lineHeight: '1.6',
                        textAlign: 'center',
                    }}
                >
                    Join thousands of happy customers who have launched their SaaS with our boilerplate.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    style={{
                        display: 'flex',
                        gap: '1.5rem',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '2rem',
                    }}
                >
                    <button style={{
                        ...sharedStyles.button.primary,
                        background: 'linear-gradient(90deg, #3b82f6 0%, #a855f7 100%)',
                        color: '#fff',
                        border: '3px solid #222',
                        borderRadius: '9999px',
                        fontWeight: 800,
                        fontSize: '0.77rem',
                        boxShadow: '0 4px 0 #222',
                        padding: '0.77rem 1.75rem',
                        cursor: 'pointer',
                        transition: 'transform 0.15s cubic-bezier(.4,2,.6,1)',
                    }}
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'none'}
                    >
                        Sign Up Now
                    </button>
                    <button style={{
                        ...sharedStyles.button.base,
                        backgroundColor: sharedStyles.colors.secondary,
                        color: sharedStyles.colors.primary,
                    }}>
                        Learn More
                    </button>
                </motion.div>
            </motion.div>

            {/* Background Effects */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `radial-gradient(circle at 50% 50%, ${sharedStyles.colors.accent.rose}10 0%, transparent 50%)`,
                zIndex: 1,
            }} />
        </div>
    );
}
