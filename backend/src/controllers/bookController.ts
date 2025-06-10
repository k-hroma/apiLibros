import { Request, Response } from "express"
import { QueryResponse } from "../types/bookType"
import { Book } from "../models/bookModel"

export const getBooks = async (req: Request, resp: Response<QueryResponse>): Promise<any> => {
  try {
    const allBooks = await Book.find()
    
    return resp.status(200).json({
      success: true,
      message: allBooks.length > 0 ? "Books retrieved successfully." : "No books found.",
      data:allBooks
    })

  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error"
    return resp.status(500).json({
      success: false,
      message: errMsg,
    })
    
  }
};
export const createBook = async (req: Request, resp: Response<QueryResponse>): Promise<any> => { 
  try {
    const { title, isbn } = req.body;
    
    if (!title || !isbn) { 
      const errMsg = "Title and ISBN are required";
      console.error(errMsg);
      return resp.status(400).json({
        success: false,
        message: errMsg,
      });
    }

    const newBook = await new Book({ title, isbn }).save();
    
    return resp.status(201).json({
      success: true,
      message: "Book created successfully.",
      data: newBook,
    });

  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    return resp.status(500).json({
      success: false,
      message: errMsg,
    });
  }
};
export const updateBook = async (req: Request, resp: Response<QueryResponse>): Promise<any> => {
  try {
    const { id } = req.params
    const { title, isbn } = req.body
    if (!id || !title && ! isbn) {
      return resp.status(400).json({
        success: false,
        message: `ID or Data is missing`
      })
    }
    const updatedBook = await Book.findByIdAndUpdate(id, { title, isbn }, { new: true })
    if (!updatedBook) {
      return resp.status(404).json({
        success: false,
        message: `Book with ID ${id} not found.`
      })
    }
    return resp.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook
    })
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    console.error(errMsg)
    return resp.status(500).json({
      success: false,
      message: errMsg,
    });
  }
};

export const deleteBook = async (req: Request, resp: Response<QueryResponse>): Promise<any> => {
  try {
    const { id } = req.params
    if (!id) {
      return resp.status(400).json({
        success: false,
        message: "ID is required.",
      })
    }
    const deletedBook = await Book.findByIdAndDelete(id)
    if (!deletedBook) { 
      return resp.status(404).json({
        success: false,
        message: `Book with ID ${id} not found.`,
      })
    }
    return resp.status(200).json({
      success: true,
      message: "Book deleted successfully.",
      data:deletedBook
    })
   } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    return resp.status(500).json({
      success: false,
      message: errMsg,
    });
  }
};

