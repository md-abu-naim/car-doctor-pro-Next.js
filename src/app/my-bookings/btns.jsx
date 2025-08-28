"use client"


export const DeleteBooking = ({data}) => {
    
    const handleDelete = async(id) => {
        console.log(id);
        const res = await fetch(`http://localhost:3000/api/service/${id}`,{
            method: "DELETE",
        })
        const deleteBook = await res.json()
        console.log(deleteBook);
    }
    return (
        <div>
            <button onClick={() => handleDelete(data._id)} className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">
                Delete
            </button>
        </div>
    )
}