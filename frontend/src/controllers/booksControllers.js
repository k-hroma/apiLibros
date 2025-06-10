// Lógica que conecta el DOM con los servicios (invoca booksService y actualiza vista)
import {
  addBook,
  deleteBook,
  updateBook,
  getBooks,
} from "../api/booksService.js";
import { clearBooks, fillForm, renderBookCard } from "../dom/booksUI.js";

import { formNewBook } from "../events/booksEvents.js";

let editingBookId = null;

const loadBooks = async () => {
  try {
    const books = await getBooks();
    books.forEach(renderBookCard);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    console.error(`Error renderBook: ${errMsg}`);
    alert("Error al cargar libros");
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const title = e.target.title.value;
    const isbn = e.target.isbn.value;
    const book = {
      isbn: isbn,
      title: title,
    };

    if (editingBookId) {
      await updateBook(editingBookId, book);
      editingBookId = null;
      document.getElementById("btnSend").textContent = "Agregar";
    } else {
      await addBook(book);
    }

    formNewBook.reset();
    clearBooks();
    await loadBooks();
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

const handleDelete = async (e) => {
  if (e.target.classList.contains("delete-btn")) {
    try {
      const deleteCard = e.target.closest(".item-card");
      const id = deleteCard.dataset.id;
      console.log(id);
      await deleteBook(id);
      clearBooks();
      await loadBooks();
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
};

const handleUpdate = async (e) => {
  if (e.target.classList.contains("update-btn")) {
    console.log("updating");
    try {
      const updateCard = e.target.closest(".item-card");
      const id = updateCard.dataset.id;
      const title = updateCard.querySelector(".titleIn").textContent;
      const isbn = updateCard.querySelector(".isbnIn").textContent;
      const book = { isbn, title };
      fillForm(book);
      editingBookId = id;
      document.getElementById("btnSend").textContent = "Update";
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
};

export { loadBooks, handleSubmit, handleDelete, handleUpdate };
