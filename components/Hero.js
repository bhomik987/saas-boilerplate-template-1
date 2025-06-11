"use client"
import { motion } from 'framer-motion';
import { sharedStyles } from '../styles';

export default function Hero() {
    return (
        <section
            style={{
                minHeight: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                backgroundColor: '#f9fafb',
                overflow: 'hidden',
            }}
        >
            {/* Subtle grid background */}
            <div
                aria-hidden
                style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}
            />
            <div
                style={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    maxWidth: 700,
                    margin: '0 auto',
                    padding: '2.5rem 1.5rem',
                    background: '#fff',
                    borderRadius: '2rem',
                    border: '5px solid #222',
                    boxShadow: '8px 8px 0px 0px #222',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    style={{
                        fontSize: '2.7rem',
                        fontWeight: 900,
                        textAlign: 'center',
                        color: '#222',
                        marginBottom: '1.2rem',
                        letterSpacing: '-1px',
                        lineHeight: 1.1,
                        background: '#fff',
                        border: '4px solid #222',
                        borderRadius: '1.2rem',
                        boxShadow: '6px 6px 0px 0px #222',
                        padding: '1.2rem 2.2rem',
                        display: 'inline-block',
                        textShadow: '2px 2px 0 #fff, 4px 4px 0 #222',
                    }}
                >
                    Build Your SaaS <span style={{ color: '#a855f7' }}>with Style</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    style={{
                        fontSize: '1.25rem',
                        color: '#444',
                        textAlign: 'center',
                        marginBottom: '2.2rem',
                        fontWeight: 500,
                        lineHeight: 1.6,
                        maxWidth: 500,
                    }}
                >
                    The playful, production-ready Next.js SaaS boilerplate. Authentication, payments, and a beautiful UI—ready out of the box. Launch with confidence and a smile.
                </motion.p>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
                    <motion.a
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.97 }}
                        href="#pricing"
                        style={{
                            padding: '1.1rem 2.8rem',
                            borderRadius: '9999px',
                            background: 'linear-gradient(90deg, #f43f5e 0%, #a855f7 100%)',
                            color: '#fff',
                            fontWeight: 800,
                            fontSize: '1.15rem',
                            border: 'none',
                            boxShadow: '0 4px 0 #222',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            letterSpacing: '0.5px',
                            textShadow: '1px 1px 0 #222',
                        }}
                    >
                        Get Started
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        href="#learn-more"
                        style={{
                            padding: '1.1rem 2.8rem',
                            borderRadius: '9999px',
                            background: '#fff',
                            color: '#a855f7',
                            fontWeight: 800,
                            fontSize: '1.15rem',
                            border: '3px solid #a855f7',
                            boxShadow: '0 2px 0 #222',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            letterSpacing: '0.5px',
                        }}
                    >
                        Learn More
                    </motion.a>
                </div>
            </div>
        </section>
    );
} 