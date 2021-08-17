import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title field is required"],
    minLenth: 3,
  },
  year: {
    type: Number,
    required: [true, "Number field is required"],
  },
  description: {
    type: String,
    required: [true, "Description Field is required"],
    minLenth: 100,
  },
});

const Book = mongoose.model("Book", bookSchema);
export default Book;
