'use client';

import axios from 'axios';
import { useState } from 'react';

type Props = {
    amount: number;
};

interface RazorpayResponse {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
}

export default function Product({ amount }: Props) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const checkoutHandler = async () => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const { data: { key } } = await axios.get(`http://localhost:4000/api/getkey`);
            const { data: { order } } = await axios.post(`http://localhost:4000/api/checkout/${amount}`);
            setSuccess(true);
            console.log('Checkout successful');

            const options = {
                key: key,
                amount: order.amount,
                currency: "INR",
                name: "Acme Corp",
                description: "Test Transaction",
                image: "https://example.com/your_logo",
                order_id: order.id,
                // handler: async function (response: RazorpayResponse) {
                //     try {
                //         const postData = {
                //             paymentid: response.razorpay_payment_id,
                //             orderid: response.razorpay_order_id,
                //             signature: response.razorpay_signature
                //         };
            
                //         const { data } = await axios.post("http://localhost:4000/api/paymentverification", postData);
                //         console.log("Payment verification response:", data);
                //     } catch (error) {
                //         console.error("Error during payment verification:", error);
                //     }
                // },
                "callback_url": "http://localhost:4000/api/paymentverification",
                prefill: {
                    name: "Gaurav Kumar",
                    email: "gaurav.kumar@example.com",
                    contact: "9000090000"
                },
                notes: {
                    address: "Razorpay Corporate Office"
                },
                theme: {
                    color: "#3399cc"
                }
            };
            
            const rzp1 = new window.Razorpay(options);
            rzp1.on('payment.failed', function (response: any) {
                setError(`Payment failed: ${response.error.description}`);
                console.error('Payment failed', response.error);
            });
            rzp1.open();

        } catch (error) {
            setError('Error during checkout');
            console.error('Error during checkout', error);
        } finally {
            setLoading(false);
        }
    };
    return (<>
        <div>
            <h1>Product</h1>
            <button onClick={checkoutHandler} disabled={loading}>
                {loading ? 'Processing...' : 'Buy Now'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Checkout successful!</p>}
        </div>
    </>

    );
}
