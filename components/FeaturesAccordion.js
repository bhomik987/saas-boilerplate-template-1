'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sharedStyles } from '../styles';

const features = [
  {
    title: 'Effortless User Authentication',
    desc: 'Implement secure user sign-up, sign-in, and password management with Supabase. Supports email/password and social logins like Google.',
  },
  {
    title: 'Robust Database & API',
    desc: 'Utilize a powerful PostgreSQL database and automatically generated APIs from Supabase, enabling quick and efficient data management.',
  },
  {
    title: 'Integrated Billing System',
    desc: 'Easily set up and manage subscriptions and payments with Stripe integration, designed for seamless user experience.',
  },
  {
    title: 'Comprehensive UI Components',
    desc: 'Access a rich library of pre-built, customizable React components to accelerate your frontend development and maintain design consistency.',
  },
];

export default function FeaturesAccordion() {
  const [open, setOpen] = useState(null);

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
          In-depth Features
        </motion.h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              style={{
                ...sharedStyles.card.base,
                cursor: 'pointer',
              }}
              onClick={() => setOpen(open === index ? null : index)}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <h3 style={{
                  ...sharedStyles.typography.heading,
                  fontSize: '1.25rem',
                  color: sharedStyles.colors.primary,
                }}>
                  {feature.title}
                </h3>
                <span style={{
                  fontSize: '1.5rem',
                  transform: open === index ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }}>
                  +
                </span>
              </div>

              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      overflow: 'hidden',
                      marginTop: '1rem',
                    }}
                  >
                    <p style={{
                      ...sharedStyles.typography.body,
                      color: '#4a5568',
                    }}>
                      {feature.desc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
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
        background: `radial-gradient(circle at 50% 50%, ${sharedStyles.colors.accent.rose}10 0%, transparent 50%)`,
        zIndex: 1,
      }} />
    </div>
  );
}
