"use client"
import { motion } from 'framer-motion';
import { sharedStyles } from '../styles';
import TestimonialAvatar from './TestimonialAvatar';
import TestimonialRating from './TestimonialRating';

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Founder, TechStart",
        content: "This boilerplate saved us months of development time. The components are beautifully designed and easy to customize.",
        avatar: "👩‍💼"
    },
    {
        name: "Michael Chen",
        role: "CTO, InnovateCo",
        content: "The best SaaS starter kit I've used. Everything just works out of the box, and the documentation is excellent.",
        avatar: "👨‍💻"
    },
    {
        name: "Emma Davis",
        role: "Product Manager, GrowthLabs",
        content: "We were able to launch our MVP in record time thanks to this boilerplate. Highly recommended!",
        avatar: "👩‍💼"
    }
];

export default function Testimonials() {
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
                    What Our Customers Say
                </motion.h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                }}>
                    {testimonials.map((testimonial, index) => (
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
                            <TestimonialRating rating={testimonial.rating} />
                            <p style={{
                                ...sharedStyles.typography.body,
                                fontSize: '1.1rem',
                                fontStyle: 'italic',
                                marginBottom: '1.5rem',
                                color: '#4a5568',
                            }}>
                                "{testimonial.content}"
                            </p>
                            <TestimonialAvatar src={testimonial.avatar} alt={testimonial.name} />
                            <h3 style={{
                                ...sharedStyles.typography.heading,
                                fontSize: '1.25rem',
                                marginTop: '1rem',
                                color: sharedStyles.colors.primary,
                            }}>
                                {testimonial.name}
                            </h3>
                            <p style={{
                                ...sharedStyles.typography.body,
                                color: '#718096',
                                fontSize: '0.9rem',
                            }}>
                                {testimonial.role}
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
                background: `radial-gradient(circle at 50% 50%, ${sharedStyles.colors.accent.blue}10 0%, transparent 50%)`,
                zIndex: 1,
            }} />
        </div>
    );
}
