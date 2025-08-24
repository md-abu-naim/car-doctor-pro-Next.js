import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";

const ServicessDetails = async ({ params }) => {
    const id = await params?.id

    const servicessSection = dbConnect(collectionNames.servicess)
    const service = await servicessSection.findOne({ _id: new ObjectId(id) })
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl overflow-hidden">
                {/* Banner / Image */}
                <Image
                    src={service.img}
                    alt={service.title}
                    className="w-full h-72 object-cover"
                />

                {/* Body */}
                <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-2xl font-bold text-gray-800">
                            {service.title}
                        </h1>
                        <span className="text-xl font-semibold text-sky-600">
                            ${service.price}
                        </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                    </p>

                    {/* Facilities */}
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">
                        Our Facilities
                    </h2>
                    <ul className="grid gap-4 md:grid-cols-2">
                        {service.facility.map((f, i) => (
                            <li
                                key={i}
                                className="p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition"
                            >
                                <h3 className="font-semibold text-gray-800">{f.name}</h3>
                                <p className="text-sm text-gray-600">{f.details}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <button>Book Now</button>
            </div>
        </div>
    );
};

export default ServicessDetails;