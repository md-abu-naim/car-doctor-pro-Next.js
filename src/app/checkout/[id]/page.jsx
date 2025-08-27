import React from 'react';
import CheckoutForm from '../CheckoutForm';

const Checkout = async ({ params }) => {
    const id = await params?.id
    const res = await fetch(`http://localhost:3000/api/service/${id}`)
    const service = await res.json()
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-6 text-center">Checkout: {service.title}</h2>

                <CheckoutForm service={service} />
            </div>
        </div>
    );
};

export default Checkout;