import React, { useState } from 'react';

const PaymentIntegration: React.FC = () => {
    const [amount, setAmount] = useState<number>(0);
    const [paymentStatus, setPaymentStatus] = useState<string>('');

    const handlePayment = async () => {
        // Here you would integrate with a payment gateway API
        try {
            // Simulate a payment process
            const response = await fakePaymentGateway(amount);
            if (response.success) {
                setPaymentStatus('Payment successful!');
            } else {
                setPaymentStatus('Payment failed. Please try again.');
            }
        } catch (error) {
            setPaymentStatus('An error occurred. Please try again.');
        }
    };

    const fakePaymentGateway = (amount: number) => {
        return new Promise<{ success: boolean }>((resolve) => {
            setTimeout(() => {
                resolve({ success: true }); // Simulate a successful payment
            }, 1000);
        });
    };

    return (
        <div>
            <h2>Payment Integration</h2>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder="Enter amount"
            />
            <button onClick={handlePayment}>Pay Now</button>
            {paymentStatus && <p>{paymentStatus}</p>}
        </div>
    );
};

export default PaymentIntegration;