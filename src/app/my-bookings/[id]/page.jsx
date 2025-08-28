import UpdateBookingForm from "./CheckoutForm";

const UpdateBooking = async({params}) => {
    const p = await params
    const res = await fetch(`http://localhost:3000/api/bookings/${p._id}`)
    const data = await res.json()
    console.log(data);
    return (
        <div>
            < UpdateBookingForm data={data} />
        </div>
    );
};

export default UpdateBooking;