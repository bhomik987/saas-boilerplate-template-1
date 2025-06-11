import axios from 'axios';

const DODO_API_URL = process.env.NEXT_PUBLIC_DODO_API_URL;
const DODO_API_KEY = process.env.DODO_API_KEY;

const dodoClient = axios.create({
    baseURL: DODO_API_URL,
    headers: {
        'Authorization': `Bearer ${DODO_API_KEY}`,
        'Content-Type': 'application/json',
    },
});

export const createPaymentIntent = async (amount, currency = 'USD', customerId) => {
    try {
        const response = await dodoClient.post('/payment-intents', {
            amount,
            currency,
            customer: customerId,
            payment_method_types: ['card'],
        });
        return response.data;
    } catch (error) {
        console.error('Error creating payment intent:', error);
        throw error;
    }
};

export const confirmPayment = async (paymentIntentId) => {
    try {
        const response = await dodoClient.post(`/payment-intents/${paymentIntentId}/confirm`);
        return response.data;
    } catch (error) {
        console.error('Error confirming payment:', error);
        throw error;
    }
};

export const createSubscription = async (customerId, priceId) => {
    try {
        const response = await dodoClient.post('/subscriptions', {
            customer: customerId,
            items: [{ price: priceId }],
            payment_behavior: 'default_incomplete',
            expand: ['latest_invoice.payment_intent'],
        });
        return response.data;
    } catch (error) {
        console.error('Error creating subscription:', error);
        throw error;
    }
};

export const cancelSubscription = async (subscriptionId) => {
    try {
        const response = await dodoClient.post(`/subscriptions/${subscriptionId}/cancel`);
        return response.data;
    } catch (error) {
        console.error('Error canceling subscription:', error);
        throw error;
    }
}; 