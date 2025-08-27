import dbConnect, { collectionNames } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const GET = async (req, { params }) => {
    const id = await params
    const service = dbConnect(collectionNames.servicess)
    const result = await service.findOne({ _id: new ObjectId(id.id) })
    return NextResponse.json(result)
}