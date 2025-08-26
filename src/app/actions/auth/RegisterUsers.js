"use server"

import dbConnect, { collectionNames } from "@/lib/dbConnect";
import bcrypt  from 'bcrypt'

const RegisterUsers = async (payload) => {
    const { email, password } = payload
    const userCollection = dbConnect(collectionNames.users)

    if (!email, !password) return null
    const user = await userCollection.findOne({ email })
    if (user) return null
    else {
        const passHassed = await bcrypt.hash(password, 10)
        payload.password = passHassed
        const result = await userCollection.insertOne(payload)
        result.insertedId = result.insertedId.toString()
        return result
    }
};

export default RegisterUsers;