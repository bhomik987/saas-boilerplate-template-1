"use client"
import { motion } from 'framer-motion';
import { sharedStyles } from '../styles';

export default function WithWithout() {
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
                    textAlign: 'center',
                }}
            >
                <motion.h2
                    style={{
                        ...sharedStyles.typography.heading,
                        fontSize: '2.5rem',
                        marginBottom: '3rem',
                        color: sharedStyles.colors.primary,
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    With vs. Without Boilerplate
                </motion.h2>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    justifyContent: 'center',
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        whileHover={sharedStyles.animations.cardHover}
                        style={{
                            ...sharedStyles.card.base,
                            flex: '1',
                            minWidth: '300px',
                            textAlign: 'left',
                        }}
                    >
                        <h3 style={{
                            ...sharedStyles.typography.heading,
                            fontSize: '1.5rem',
                            marginBottom: '1rem',
                            color: sharedStyles.colors.primary,
                        }}>
                            With Boilerplate
                        </h3>
                        <ul style={{
                            ...sharedStyles.typography.body,
                            listStyle: 'none',
                            paddingLeft: '1.25rem',
                            color: '#4a5568',
                        }}>
                            <li style={{ marginBottom: '0.5rem' }}>✅ Faster launch</li>
                            <li style={{ marginBottom: '0.5rem' }}>✅ Best practices</li>
                            <li style={{ marginBottom: '0.5rem' }}>✅ Integrated features</li>
                            <li>✅ Reduced development costs</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        whileHover={sharedStyles.animations.cardHover}
                        style={{
                            ...sharedStyles.card.base,
                            flex: '1',
                            minWidth: '300px',
                            textAlign: 'left',
                        }}
                    >
                        <h3 style={{
                            ...sharedStyles.typography.heading,
                            fontSize: '1.5rem',
                            marginBottom: '1rem',
                            color: sharedStyles.colors.primary,
                        }}>
                            Without Boilerplate
                        </h3>
                        <ul style={{
                            ...sharedStyles.typography.body,
                            listStyle: 'none',
                            paddingLeft: '1.25rem',
                            color: '#4a5568',
                        }}>
                            <li style={{ marginBottom: '0.5rem' }}>❌ Slower setup</li>
                            <li style={{ marginBottom: '0.5rem' }}>❌ Reinventing the wheel</li>
                            <li style={{ marginBottom: '0.5rem' }}>❌ Manual integrations</li>
                            <li>❌ Higher development costs</li>
          </ul>
                    </motion.div>
        </div>
            </motion.div>

            {/* Background Effects */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `radial-gradient(circle at 50% 50%, ${sharedStyles.colors.accent.blue}10 0%, transparent 50%)`,
                zIndex: 1,
            }} />
        </div>
  );
}
