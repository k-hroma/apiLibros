// Manejadores de eventos (formulario, clicks)
import {
  handleDelete,
  handleSubmit,
  handleUpdate,
} from "../controllers/booksControllers.js";
export const formNewBook = document.getElementById("subNewBook");
const cardsCont = document.getElementById("gridContainer");

const initEventsListeners = () => {
  formNewBook.addEventListener("submit", handleSubmit);
  cardsCont.addEventListener("click", handleDelete);
  cardsCont.addEventListener("click", handleUpdate);
};

export { initEventsListeners };
