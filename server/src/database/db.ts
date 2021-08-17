import mongoose from "mongoose";
import "colors";

const connectDB = async () => {
  try {
    //   Normally I will not share the Mongo URI and will ask to get you own URI
    //   But I think this will slow you down so for this porpos I leave it in the env folder else you will not be able to run the server
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
