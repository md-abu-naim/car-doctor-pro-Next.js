"use server"

import dbConnect, { collectionNames } from "@/lib/dbConnect";
import bcrypt from 'bcrypt'

const LoginUser = async(payload) => {
    const {email, password} = payload
    const userCollection = dbConnect(collectionNames.users)
    const user = await userCollection.findOne({email})
    if(!user) return {success: false}
    const isPassOk = bcrypt.compare(user.password, password)
    if(!isPassOk) return  {success: false}
    return user

};

export default LoginUser;