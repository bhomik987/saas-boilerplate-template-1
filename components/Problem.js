"use client"
import { motion } from 'framer-motion';
import { sharedStyles } from '../styles';

export default function Problem() {
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
                }}
            >
                <motion.h2
                    style={{
                        ...sharedStyles.typography.heading,
                        fontSize: '2.5rem',
                        marginBottom: '1.5rem',
                        color: sharedStyles.colors.primary,
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    The Problem
                </motion.h2>
                <motion.p
                    style={{
                        ...sharedStyles.typography.body,
                        fontSize: '1.25rem',
                        marginBottom: '2.5rem',
                        color: '#4a5568',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Building SaaS products from scratch is time-consuming and repetitive. This boilerplate helps you get started quickly.
                </motion.p>
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
