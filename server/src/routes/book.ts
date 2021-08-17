import express from "express";
import { createBook, getBook, getBooks } from "../controllers/bookController";

const bookRouter = express.Router();

bookRouter.get("/books", getBooks);
bookRouter.get("/book/:id", getBook);
bookRouter.post("/books", createBook);

export default bookRouter;
