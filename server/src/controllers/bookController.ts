import { Request, Response } from "express";
import Book from "../models/Book";

//@Route  GET /api/v1/books
//@Desc   get all books sorted by date
//@Access Public
export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find().sort("-year");
    res.status(200).json({ books });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//@Route  GET /api/v1/book/:id
//@Desc   get single book by id
//@Access Public
export const getBook = async (req: Request, res: Response) => {
  const id = req.query.id;
  try {
    const book = await Book.findById(id);
    if (!book) {
      res.status(400).json({ error: "Book not found" });
      return;
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//@Route  POST /api/v1/book
//@Desc   create new book
//@Access Public
export const createBook = async (req: Request, res: Response) => {
  const { title, description, year } = req.body;
  if (!title || !description || !year) {
    res.status(400).json({ error: "Invalid Input - missing fields" });
    return;
  }
  try {
    const book = await Book.create(req.body);
    res.status(200).json({ msg: "Book created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
