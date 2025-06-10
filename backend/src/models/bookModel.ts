import { Schema, model } from "mongoose";
import { IBook } from "../types/bookType";

const BookSchema = new Schema<IBook>({
  title: { type: String, required: true, trim: true },
  isbn: { type: String, required: true, unique: true },
}, { timestamps: true });

const Book = model<IBook>("Book", BookSchema)
export { Book }
