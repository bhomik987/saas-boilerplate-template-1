import { createPaymentIntent } from '@/libs/dodoPayments';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { amount, currency, customerId } = await request.json();

        if (!amount || !customerId) {
            return NextResponse.json(
                { error: 'Amount and customerId are required' },
                { status: 400 }
            );
        }

        const paymentIntent = await createPaymentIntent(amount, currency, customerId);

        return NextResponse.json(paymentIntent);
    } catch (error) {
        console.error('Payment intent creation error:', error);
        return NextResponse.json(
            { error: 'Failed to create payment intent' },
            { status: 500 }
        );
    }
} 