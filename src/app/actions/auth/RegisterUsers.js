"use server"

import dbConnect, { collectionNames } from "@/lib/dbConnect";
import bcrypt  from 'bcrypt'

const RegisterUsers = async (payload) => {
    const { email, password } = payload
    const userCollection = dbConnect(collectionNames.users)

    if (!email, !password) return {success: false}
    const user = await userCollection.findOne({ email })
    if (user) return {success: false}
    else {
        const passHassed = await bcrypt.hash(password, 10)
        payload.password = passHassed
        const result = await userCollection.insertOne(payload)
        const {acknowledged, insertedId}= result
        return {acknowledged, insertedId}
    }
};

export default RegisterUsers;