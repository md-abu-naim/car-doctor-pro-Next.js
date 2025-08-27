import React from 'react';

const Checkout = async({params}) => {
    const id = await params?.id
    const res = await fetch(`http://localhost:3000/api/service/${id}`)
    const service = await res.json()
    return (
        <div>
            checkout {service.title}
        </div>
    );
};

export default Checkout;