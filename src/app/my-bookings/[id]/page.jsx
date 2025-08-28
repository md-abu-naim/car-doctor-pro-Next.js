import UpdateBookingForm from "./UpdateBookingForm";

const UpdateBooking = async({params}) => {
    const p = await params
    const res = await fetch(`http://localhost:3000/api/bookings/${p.id}`)
    const data = await res.json()
    console.log(data);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-6 text-center">Update Booking</h2>

                <UpdateBookingForm data={data} />
            </div>
        </div>
    );
};

export default UpdateBooking;