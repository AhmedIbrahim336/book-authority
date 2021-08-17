import express from "express";
import { getBooks } from "../controllers/bookController";

const bookRouter = express.Router();

bookRouter.get("/", getBooks);

export default bookRouter;
