import express from "express";
import cors from "cors";
import connectDB from "./database/db";
import dotenv from "dotenv";
import bookRouter from "./routes/book";
const app = express();
const port = 3000;

// Setup env variables
dotenv.config();

app.use(express.json());
app.use(cors());
// Connect to MongoDB
connectDB();
// Routes
app.use("/api/v1/", bookRouter);

app.listen(port, () => {
  return console.log(`server is listening on ${port}`.bgGreen);
});
