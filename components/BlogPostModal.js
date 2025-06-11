"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { sharedStyles } from '../styles';

export default function BlogPostModal({ isOpen, onClose, post }) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                    }}
                >
                    <motion.div
                        initial={{ y: "-100vh" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100vh" }}
                        transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 500 }}
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                        style={{
                            ...sharedStyles.card.base,
                            maxWidth: '700px',
                            width: '90%',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            position: 'relative',
                            backgroundColor: sharedStyles.colors.secondary,
                            padding: '2rem',
                        }}
                    >
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                background: 'none',
                                border: 'none',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                color: sharedStyles.colors.primary,
                            }}
                        >
                            &times;
                        </button>
                        {post && (
                            <div>
                                <h2 style={{
                                    ...sharedStyles.typography.heading,
                                    fontSize: '2.5rem',
                                    marginBottom: '1rem',
                                    color: sharedStyles.colors.primary,
                                }}>
                                    {post.title}
                                </h2>
                                <p style={{
                                    ...sharedStyles.typography.body,
                                    fontSize: '0.9rem',
                                    color: '#4a5568',
                                    marginBottom: '1.5rem',
                                }}>
                                    {post.date}
                                </p>
                                <div style={{
                                    ...sharedStyles.typography.body,
                                    lineHeight: '1.8',
                                    color: '#333',
                                }}>
                                    {post.fullContent}
                                </div>
                            </div>
                        )}
                        <button
                            onClick={onClose}
                            style={{
                                ...sharedStyles.button.primary,
                                backgroundColor: sharedStyles.colors.accent.blue,
                                color: sharedStyles.colors.secondary,
                                marginTop: '2rem',
                                alignSelf: 'center',
                            }}
                        >
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
} 