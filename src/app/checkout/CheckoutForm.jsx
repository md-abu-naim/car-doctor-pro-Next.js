"use client"

import { useSession } from "next-auth/react";

const CheckoutForm = ({ service }) => {
    const { data: session } = useSession()

    const handleBooking = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const date = form.date.value
        const email = form.email.value
        const due = form.due.value
        const phone = form.phone.value
        const address = form.address.value
        const book = { name, date, email, due, phone, address, service }
        console.log(book);

        const res = await fetch(`http://localhost:3000/api/service`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(book),
        })
        const booking = await res.json()
        console.log(booking);
    }
    return (
        <form onSubmit={handleBooking} className="space-y-4">
            <input name='name'
                type="text" defaultValue={session?.user?.name}
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            />

            <input name='date'
                type="date"
                placeholder="Date"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            />

            <input name='email'
                type="email" defaultValue={session?.user?.email}
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            />

            <input name='due'
                type="number"
                placeholder="Due Amount"
                defaultValue={service.price}
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