import { Router } from "express";
import { getBooks, createBook, updateBook, deleteBook } from "../controllers/bookController";

const routerBook = Router();

routerBook.get("/", getBooks);
routerBook.post("/", createBook);
routerBook.patch("/:id", updateBook);
routerBook.delete("/:id", deleteBook);

export { routerBook };
