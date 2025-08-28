import dbConnect, { collectionNames } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"
import { resumePluginState } from "next/dist/build/build-context"
import { NextResponse } from "next/server"

export const GET = async(req, {params}) => {
    const p = await params
    const booking = dbConnect(collectionNames.booking)
    const query = {_id: new ObjectId(p.id)}
    const result = await booking.findOne(query)
    
    return NextResponse.json(resumePluginState)
}