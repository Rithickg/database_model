import mongoose from "mongoose";

const DbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Connected to Mongodb Application...")
    } catch (error) {
        console.error("Unable to connect to the database:", error)
    }
}

export { DbConnection }