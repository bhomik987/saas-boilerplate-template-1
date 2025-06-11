"use client"
import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion'

// Color mapping for plan.accent
const accentColors = {
  "bg-rose-500": "#f43f5e", // Tailwind rose-500
  "bg-blue-500": "#3b82f6", // Tailwind blue-500
  "bg-purple-500": "#a855f7", // Tailwind purple-500
};

// Counter Component
const Counter = ({ from, to }) => {
    const nodeRef = useRef(null);
    React.useEffect(() => {
        const node = nodeRef.current;
        if (!node) return;
        const controls = animate(from, to, {
            duration: 1,
            onUpdate(value) {
                node.textContent = value.toFixed(0);
            },
        });
        return () => controls.stop();
    }, [from, to]);
    return <span ref={nodeRef} />;
};

// Header Component
const PricingHeader = ({ title }) => (
    <div style={{ textAlign: 'center', marginBottom: '2rem', position: 'relative', zIndex: 10 }}>
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ display: 'inline-block' }}
        >
            <h1 
                style={{
                    fontSize: '2.25rem',
                    fontWeight: '900',
                    color: '#1e293b',
                    background: 'linear-gradient(to right, white, #f3f4f6)',
                    padding: '1rem 2rem',
                    borderRadius: '0.75rem',
                    border: '4px solid black',
                    boxShadow: '8px 8px 0px 0px rgba(0,0,0,0.9), 15px 15px 15px -3px rgba(0,0,0,0.1)',
                    transform: 'translateY(0) translateX(0)',
                    transition: 'transform 0.2s ease-in-out',
                    marginBottom: '0.75rem',
                    position: 'relative',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(4px) translateY(4px)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0) translateY(0)';
                }}
            >
                {title}
            </h1>
            <motion.div
                style={{
                    height: '0.5rem',
                    backgroundImage: 'linear-gradient(to right, black, #4b5563, black)',
                    borderRadius: '9999px',
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5 }}
            />
        </motion.div>
    </div>
);

// Toggle Component
const PricingToggle = ({ isYearly, onToggle }) => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '2rem', position: 'relative', zIndex: 10 }}>
        <span style={{ color: '#4b5563', fontWeight: '500', ...(isYearly ? {} : { color: 'black' }) }}>Monthly</span>
        <motion.button
            style={{
                width: '4rem',
                height: '2rem',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#e5e7eb',
                borderRadius: '9999px',
                padding: '0.25rem',
                border: '2px solid black',
                boxShadow: '2px 2px 0px 0px rgba(0,0,0,0.9)',
                cursor: 'pointer',
            }}
            onClick={onToggle}
        >
            <motion.div
                style={{
                    width: '1.5rem',
                    height: '1.5rem',
                    backgroundColor: 'white',
                    borderRadius: '9999px',
                    border: '2px solid black',
                }}
                animate={{ x: isYearly ? 32 : 0 }}
            />
        </motion.button>
        <span style={{ color: '#4b5563', fontWeight: '500', ...(isYearly ? { color: 'black' } : {}) }}>Yearly</span>
        {isYearly && (
            <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ color: '#22c55e', fontWeight: '500', fontSize: '0.875rem' }}
            >
                Save 20%
            </motion.span>
        )}
    </div>
);

// Background Effects Component
const BackgroundEffects = () => (
    <>
        <div style={{ position: 'absolute', inset: 0 }}>
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        width: '0.5rem',
                        height: '0.5rem',
                        backgroundColor: 'rgba(0,0,0,0.05)',
                        borderRadius: '9999px',
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
        <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
            backgroundSize: "16px 16px"
        }} />
    </>
);

// Pricing Card Component
const PricingCard = ({ plan, isYearly, index }) => {
    const cardRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 15, stiffness: 150 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), springConfig);

    const currentPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
    const previousPrice = !isYearly ? plan.yearlyPrice : plan.monthlyPrice;

    const currentAccentColor = accentColors[plan.accent] || '#000000';

    return (
        <motion.div
            ref={cardRef}
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            style={{
                rotateX,
                rotateY,
                perspective: 1000,
                position: 'relative',
                width: '100%',
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                border: '3px solid black',
                boxShadow: '6px 6px 0px 0px rgba(0,0,0,0.9)',
                transition: 'all 0.2s ease-in-out',
            }}
            onMouseMove={(e) => {
                if (!cardRef.current) return;
                const rect = cardRef.current.getBoundingClientRect();
                const centerX = rect.x + rect.width / 2;
                const centerY = rect.y + rect.height / 2;
                mouseX.set((e.clientX - centerX) / rect.width);
                mouseY.set((e.clientY - centerY) / rect.height);
            }}
            onMouseLeave={() => {
                mouseX.set(0);
                mouseY.set(0);
            }}
        >
            {/* Price Badge */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid black',
                    boxShadow: '3px 3px 0px 0px rgba(0,0,0,0.9)',
                    backgroundColor: currentAccentColor,
                }}
                animate={{
                    rotate: [0, 10, 0, -10, 0],
                    scale: [1, 1.1, 0.9, 1.1, 1],
                    y: [0, -5, 5, -3, 0]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: [0.76, 0, 0.24, 1]
                }}
            >
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <div style={{ fontSize: '1.125rem', fontWeight: '900' }}>$
                        <Counter from={previousPrice} to={currentPrice} />
                    </div>
                    <div style={{ fontSize: '0.625rem', fontWeight: 'bold' }}>/{isYearly ? 'yr' : 'mo'}</div>
                </div>
            </motion.div>

            {/* Plan Name and Popular Badge */}
            <div style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '900', color: 'black', marginBottom: '0.5rem' }}>{plan.name}</h3>
                {plan.isPopular && (
                    <motion.span
                        style={{
                            display: 'inline-block',
                            padding: '0.25rem 0.75rem',
                            color: 'white',
                            fontWeight: 'bold',
                            borderRadius: '0.375rem',
                            fontSize: '0.75rem',
                            border: '2px solid black',
                            boxShadow: '2px 2px 0px 0px rgba(0,0,0,0.9)',
                            backgroundColor: currentAccentColor,
                        }}
                        animate={{
                            y: [0, -3, 0],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity
                        }}
                    >
                        POPULAR
                    </motion.span>
                )}
            </div>

            {/* Features List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                {plan.features.map((feature, i) => (
                    <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{
                            x: 5,
                            scale: 1.02,
                            transition: { type: "spring", stiffness: 400 }
                        }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem',
                            backgroundColor: '#f9fafb',
                            borderRadius: '0.375rem',
                            border: '2px solid black',
                            boxShadow: '2px 2px 0px 0px rgba(0,0,0,0.9)',
                        }}
                    >
                        <motion.span
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            style={{
                                width: '1.25rem',
                                height: '1.25rem',
                                borderRadius: '0.375rem',
                                backgroundColor: currentAccentColor,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '0.75rem',
                                border: '1px solid black',
                                boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.9)',
                            }}
                        >
                            ✓
                        </motion.span>
                        <span style={{ color: 'black', fontWeight: 'bold', fontSize: '0.875rem' }}>{feature}</span>
                    </motion.div>
                ))}
            </div>

            {/* CTA Button */}
            <motion.button
                style={{
                    width: '100%',
                    paddingTop: '0.5rem',
                    paddingBottom: '0.5rem',
                    borderRadius: '0.5rem',
                    backgroundColor: currentAccentColor,
                    color: 'white',
                    fontWeight: '900',
                    fontSize: '0.875rem',
                    border: '2px solid black',
                    boxShadow: '4px 4px 0px 0px rgba(0,0,0,0.9)',
                    transition: 'all 0.2s ease-in-out',
                    cursor: 'pointer',
                }}
                whileHover={{
                    scale: 1.02,
                    boxShadow: '6px 6px 0px 0px rgba(0,0,0,0.9)',
                    transition: { duration: 0.2 }
                }}
                whileTap={{
                    scale: 0.95,
                    boxShadow: '2px 2px 0px 0px rgba(0,0,0,0.9)',
                    rotate: [-1, 1, 0],
                }}
                onClick={() => {
                    const type = isYearly ? 'yearly' : 'monthly';
                    let url = '';
                    if (plan.name === 'Starter') {
                        url = isYearly
                            ? 'https://test.checkout.dodopayments.com/buy/pdt_4moR5jTwLjgOMTrubGQc3?quantity=1' // replace with real link
                            : 'https://test.checkout.dodopayments.com/buy/pdt_4moR5jTwLjgOMTrubGQc3?quantity=1'; // replace with real link
                    } else if (plan.name === 'Pro') {
                        url = isYearly
                            ? 'https://test.checkout.dodopayments.com/buy/pdt_Ug7teTpwXSMIU0r8PyXD3?quantity=1' // replace with real link
                            : 'https://test.checkout.dodopayments.com/buy/pdt_Ug7teTpwXSMIU0r8PyXD3?quantity=1'; // replace with real link
                    } else if (plan.name === 'Enterprise') {
                        url = isYearly
                            ? 'https://test.checkout.dodopayments.com/buy/pdt_ml9p1x5wcS8rfInubJanE?quantity=1' // replace with real link
                            : 'https://test.checkout.dodopayments.com/buy/pdt_ml9p1x5wcS8rfInubJanE?quantity=1'; // replace with real link
                    }
                    window.location.href = url;
                }}
            >
                GET STARTED →
            </motion.button>
        </motion.div>
    );
};

// Main Container Component
export const PricingContainer = ({ title = "Pricing Plans", plans }) => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#f0f0f0',
            padding: '1rem',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '0.75rem',
        }}>
            <PricingHeader title={title} />
            <PricingToggle isYearly={isYearly} onToggle={() => setIsYearly(!isYearly)} />
            <BackgroundEffects />

            <div style={{
                width: '100%',
                maxWidth: '80rem',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                position: 'relative',
                zIndex: 10,
            }}>
                {plans.map((plan, index) => (
                    <PricingCard
                        key={plan.name}
                        plan={plan}
                        isYearly={isYearly}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};
