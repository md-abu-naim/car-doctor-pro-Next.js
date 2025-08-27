import React from 'react';

const CheckoutForm = () => {
    return (
        <form className="space-y-4">
            <input name='name'
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            />

            <input name='date'
                type="date"
                placeholder="Date"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            />

            <input name='email'
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            />

            <input name='due'
                type="number"
                placeholder="Due Amount"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            />

            <input name='phone'
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            />

            <textarea name='address'
                placeholder="Address"
                rows="3"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            ></textarea>

            <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
                Submit
            </button>
        </form>
    );
};

export default CheckoutForm;