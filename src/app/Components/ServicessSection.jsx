import dbConnect, { collectionNames } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ServicessSection = async () => {
    const servicesCollection = dbConnect(collectionNames.servicess)
    const data = await servicesCollection.find({}).toArray()
    
    return (
        <div className="grid grid-cols-1 text-black md:grid-cols-3 gap-4">
            {
                data?.map(s => <div key={s._id} className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
                    {/* Image */}
                    <Image width={314} height={208}
                        src={s.img}
                        alt="Engine Oil Change"
                        className="w-full h-48 object-cover"
                    />

                    {/* Body */}
                    <div className="p-5">
                        <h3 className="text-lg font-bold text-gray-800">{s.title}</h3>

                        <div className="flex items-center justify-between">
                            <span className="text-sky-600 font-semibold text-base">${s.price}</span>
                            <Link href={`/servicess/${s._id}`}><FaArrowRight className="w-6 h-6 text-gray-500 cursor-pointer hover:text-sky-600" /></Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ServicessSection;