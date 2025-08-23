import dbConnect from "@/lib/dbConnect";
import Image from "next/image";
import { FaInfoCircle } from "react-icons/fa";

const ServicessSection = async () => {
    // const res = await fetch('/services.json')
    // const data = await res.json()

    // const data = [
    //     {
    //         "_id": "635a0c0b64a6d231228942ae",
    //         "service_id": "04",
    //         "title": "Engine Oil Change",
    //         "img": "https://i.ibb.co/T2cpBd5/888.jpg",
    //         "price": "20.00",
    //         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
    //         "facility": [
    //             {
    //                 "name": "Instant Car Services",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "24/7 Quality Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "Easy Customer Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "Quality Cost Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             }
    //         ]
    //     },
    //     {
    //         "_id": "635a0c0b64a6d231228942af",
    //         "service_id": "05",
    //         "title": "Battery Charge",
    //         "img": "https://i.ibb.co/ydCbDN3/5555.jpg",
    //         "price": "20.00",
    //         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
    //         "facility": [
    //             {
    //                 "name": "Instant Car Services",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "24/7 Quality Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "Easy Customer Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "Quality Cost Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             }
    //         ]
    //     },
    //     {
    //         "_id": "635b591a1dafe382a9da8c96",
    //         "service_id": "01",
    //         "title": "Full car Repair",
    //         "img": "https://i.ibb.co/R6Z2nFM/55.jpg",
    //         "price": "200.00",
    //         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
    //         "facility": [
    //             {
    //                 "name": "Instant Car Services",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "24/7 Quality Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "Easy Customer Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "Quality Cost Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             }
    //         ]
    //     },
    //     {
    //         "_id": "635b5afc1dafe382a9da8c98",
    //         "service_id": "02",
    //         "title": "Engine Repair",
    //         "img": "https://i.ibb.co/5MvmD2g/88.jpg",
    //         "price": "150.00",
    //         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
    //         "facility": [
    //             {
    //                 "name": "Instant Car Services",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "24/7 Quality Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "Easy Customer Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "Quality Cost Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             }
    //         ]
    //     },
    //     {
    //         "_id": "635b5b691dafe382a9da8c99",
    //         "service_id": "03",
    //         "title": "Automatic Services",
    //         "img": "https://i.ibb.co/wh7t3N3/555.jpg",
    //         "price": "30.00",
    //         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
    //         "facility": [
    //             {
    //                 "name": "Instant Car Services",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "24/7 Quality Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "Easy Customer Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "Quality Cost Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             }
    //         ]
    //     },
    //     {
    //         "_id": "635b5ba51dafe382a9da8c9a",
    //         "service_id": "06",
    //         "title": "Electrical System",
    //         "img": "https://i.ibb.co/KzCG8qr/8888.jpg",
    //         "price": "20.00",
    //         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
    //         "facility": [
    //             {
    //                 "name": "Instant Car Services",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "24/7 Quality Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "Easy Customer Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             },
    //             {
    //                 "name": "Quality Cost Service",
    //                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
    //             }
    //         ]
    //     }
    // ]
    const data = await dbConnect('services').find().toArray()
    console.log(data);
    return (
        <div className="grid grid-cols-1 text-black md:grid-cols-3 gap-4">
            {
                data.map(s => <div key={s._id} className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
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
                            <FaInfoCircle className="w-6 h-6 text-gray-500 cursor-pointer hover:text-sky-600" />
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ServicessSection;