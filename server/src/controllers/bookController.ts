import { Request, Response } from "express";
import Book from "../models/Book";

export const getBooks = (req: Request, res: Response) => {
  try {
    const books = Book.find().sort("-year");
    res.status(200).json({ books });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
