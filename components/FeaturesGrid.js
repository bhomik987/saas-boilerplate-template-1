"use client"
import { motion } from 'framer-motion';
import { sharedStyles } from '../styles';

const features = [
    {
        title: "Authentication",
        description: "Secure user authentication with email/password and social logins",
        icon: "🔐"
    },
    {
        title: "Database",
        description: "Powerful database with real-time subscriptions",
        icon: "💾"
    },
    {
        title: "Storage",
        description: "File storage with automatic optimization",
        icon: "📦"
    },
    {
        title: "Payments",
        description: "Integrated payment processing with Stripe",
        icon: "💳"
    }
];

export default function FeaturesGrid() {
  return (
        <div style={{
            backgroundColor: sharedStyles.colors.background,
            padding: '4rem 2rem',
            position: 'relative',
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    maxWidth: '80rem',
                    margin: '0 auto',
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
                    Powerful Features
                </motion.h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                }}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            whileHover={sharedStyles.animations.cardHover}
                            style={{
                                ...sharedStyles.card.base,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                padding: '2rem',
                            }}
                        >
                            <span style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}>{feature.icon}</span>
                            <h3 style={{
                                ...sharedStyles.typography.heading,
                                fontSize: '1.5rem',
                                marginBottom: '1rem',
                                color: sharedStyles.colors.primary,
                            }}>
                                {feature.title}
                            </h3>
                            <p style={{
                                ...sharedStyles.typography.body,
                                color: '#4a5568',
                            }}>
                                {feature.description}
                            </p>
                        </motion.div>
        ))}
      </div>
            </motion.div>

            {/* Background Effects */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `radial-gradient(circle at 50% 50%, ${sharedStyles.colors.accent.purple}10 0%, transparent 50%)`,
                zIndex: 1,
            }} />
        </div>
  );
}
