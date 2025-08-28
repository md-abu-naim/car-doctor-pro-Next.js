import { authOptions } from "@/lib/authOptions"
import dbConnect, { collectionNames } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export const GET = async (req, { params }) => {
    const id = await params
    const service = dbConnect(collectionNames.servicess)
    const result = await service.findOne({ _id: new ObjectId(id.id) })
    return NextResponse.json(result)
}

export const DELETE = async(req, {params}) => {
    const id = await params
    const bookingCollecion = dbConnect(collectionNames.booking)
    const session = await getServerSession(authOptions)
    const query = {_id: new ObjectId(id.id)}

    const currentBooking = await bookingCollecion.findOne(query)
    const isWonerOk = session?.user?.email == currentBooking.email

    if(isWonerOk){
        const result = await bookingCollecion.deleteOne(query)
        revalidatePath('/my-bookings')
        return NextResponse.json(result)
    }else{
        return NextResponse.json({success: false, message: 'forbidden access'}, {status: 401})
    }
}