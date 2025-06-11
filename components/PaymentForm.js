import { useState } from 'react';
import { motion } from 'framer-motion';
import { sharedStyles } from '../styles';

export default function PaymentForm({ amount, onSuccess, onError }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handlePayment = async () => {
        try {
            setLoading(true);
            setError(null);

            // Get the current user's ID from your auth system
            const customerId = 'current-user-id'; // Replace with actual user ID

            const response = await fetch('/api/payments/create-intent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount,
                    currency: 'USD',
                    customerId,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Payment failed');
            }

            // Here you would typically redirect to DodoPayments hosted payment page
            // or handle the payment flow according to DodoPayments documentation
            console.log('Payment intent created:', data);

            onSuccess(data);
        } catch (err) {
            setError(err.message);
            onError(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                padding: '2rem',
                borderRadius: '1rem',
                background: 'white',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
        >
            <h3 style={{
                ...sharedStyles.typography.heading,
                fontSize: '1.5rem',
                marginBottom: '1.5rem',
                color: sharedStyles.colors.primary,
            }}>
                Complete Your Purchase
            </h3>

            <div style={{ marginBottom: '1.5rem' }}>
                <p style={{
                    ...sharedStyles.typography.body,
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: sharedStyles.colors.text.primary,
                }}>
                    Total Amount: ${(amount / 100).toFixed(2)}
                </p>
            </div>

            {error && (
                <div style={{
                    padding: '1rem',
                    marginBottom: '1rem',
                    borderRadius: '0.5rem',
                    background: '#FEE2E2',
                    color: '#DC2626',
                }}>
                    {error}
                </div>
            )}

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePayment}
                disabled={loading}
                style={{
                    ...sharedStyles.button.primary,
                    width: '100%',
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? 'not-allowed' : 'pointer',
                }}
            >
                {loading ? 'Processing...' : 'Pay Now'}
            </motion.button>

            <p style={{
                ...sharedStyles.typography.body,
                fontSize: '0.875rem',
                color: sharedStyles.colors.text.secondary,
                marginTop: '1rem',
                textAlign: 'center',
            }}>
                Secure payment powered by DodoPayments
            </p>
        </motion.div>
    );
} 