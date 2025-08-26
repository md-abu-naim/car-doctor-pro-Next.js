import { MongoClient, ServerApiVersion } from 'mongodb';

export const collectionNames = {
    servicess: "services",
    users: 'users'
}

const dbConnect = (collectionName) => {
    const uri = `mongodb+srv://${process.env.MONOGDB_USER}:${process.env.MONGODB_PASS}@cluster0.zyfftle.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    return client.db("car_doctor_pro").collection(collectionName)
};

export default dbConnect;