import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async(req) => {
    const session = await getServerSession(authOptions)

    if(session){
        const email = session?.user?.email
        const data = dbConnect(collectionNames.booking)
        const result = await data.find({email}).toArray()
        return NextResponse.json(result)
    }

    return NextResponse.json({})
}

export const POST = async(req) => {
    const service = await req.json()
    const booking = dbConnect(collectionNames.booking)
    const result = await booking.insertOne(service)
    return NextResponse.json(result)
}