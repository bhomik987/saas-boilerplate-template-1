"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sharedStyles } from '../styles';

const faqs = [
  {
    question: 'What is this boilerplate built with?',
    answer: 'It is built with Next.js, React, and Supabase for a powerful and scalable SaaS foundation.',
  },
  {
    question: 'Does it include authentication?',
    answer: 'Yes, it comes with full user authentication powered by Supabase Auth, including social logins.',
  },
  {
    question: 'Is it easy to deploy?',
    answer: 'Absolutely! It is designed for easy deployment to Vercel or any other Next.js compatible hosting platform.',
  },
  {
    question: 'Can I customize the design?',
    answer: 'The boilerplate provides a clean, minimalist design that is easy to customize with your own branding and styles.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

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
          Frequently Asked Questions
        </motion.h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              style={{
                ...sharedStyles.card.base,
                cursor: 'pointer',
              }}
              onClick={() => {
                console.log(`Clicked FAQ item ${index}`);
                setOpenIndex(openIndex === index ? null : index);
              }}
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
              {faq.question}
                </h3>
                <span style={{
                  fontSize: '1.5rem',
                  transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }}>
                  +
              </span>
              </div>
              
              <AnimatePresence>
                {openIndex === index && (
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
                      {faq.answer}
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
