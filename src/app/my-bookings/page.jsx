import BookingsTable from "../Components/Table";

const MyBookings = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className=" bg-white shadow-lg rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-6">My Bookings</h2>

                <BookingsTable />
            </div>
        </div>
    );
};

export default MyBookings;