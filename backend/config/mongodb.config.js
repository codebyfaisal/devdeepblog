import mongoose from "mongoose";

const connectMongoDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB Connected");
  })
  
  await mongoose.connect(`${process.env.MONGODB_URI}/blogger`)
}

export default connectMongoDB;