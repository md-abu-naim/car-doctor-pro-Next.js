
const BookingsTable = () => {
    return (
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
                <tr>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Email</th>
                    <th className="px-4 py-2 text-left">Phone</th>
                    <th className="px-4 py-2 text-left">Service</th>
                    <th className="px-4 py-2 text-left">Due</th>
                    <th className="px-4 py-2 text-left">Address</th>
                    <th className="px-4 py-2 text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b">
                    <td className="px-4 py-2">tahmidul islam naim</td>
                    <td className="px-4 py-2">tahmidulislamnaim1234@gmail.com</td>
                    <td className="px-4 py-2">01555</td>
                    <td className="px-4 py-2">Battery Charge</td>
                    <td className="px-4 py-2">$20.00</td>
                    <td className="px-4 py-2">faskjkf</td>
                    <td className="px-4 py-2 text-center space-x-2">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600">
                            Edit
                        </button>
                        <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default BookingsTable;