import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async(req) => {
    const service = await req.json()
    const booking = dbConnect(collectionNames.booking)
    const result = await booking.insertOne(service)
    return NextResponse.json(result)
}