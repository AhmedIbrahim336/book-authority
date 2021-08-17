import express from "express";
import cors from "cors";
import connectDB from "./database/db";
import dotenv from "dotenv";
const app = express();
const port = 3000;
dotenv.config();
app.use(express.json());
app.use(cors());
connectDB();

app.listen(port, () => {
  return console.log(`server is listening on ${port}`.bgGreen);
});
