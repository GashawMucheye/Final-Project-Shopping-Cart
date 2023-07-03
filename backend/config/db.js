import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`mongoDB connected : ${conn.connection.host}`.blue.bold);
  } catch (error) {
    console.log(error);
    //stop process
    process.exit(1);
  }
};

export default connectDB;
