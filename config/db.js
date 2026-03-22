import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

export const connectDb = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongodb Connected successfuly")
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
} 