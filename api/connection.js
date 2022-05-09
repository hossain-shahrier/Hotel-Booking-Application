import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// MongoDB(DatatBase)
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB...");
  } catch (err) {
    throw err;
  }
};
// MongoDB Diconnection problem
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

export default connect;
