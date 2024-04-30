import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.Mongoose_Url)
        console.log(`Connected to DB ${conn.connection.host}`)
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

export default connectDB