"use client"

import { useEffect, useState } from "react";
import BookingsTable from "../Components/Table";

const MyBookings =  () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetcing = async () => {
            const res = await fetch('http://localhost:3000/api/service')
            const data = await res.json()
            setData(data);
        }
        fetcing()
    }, [])
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className=" bg-white shadow-lg rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-6">My Bookings {data?.length}</h2>
                <BookingsTable data={data} />
            </div>
        </div>
    );
};

export default MyBookings;