import { loadBooks } from "./src/controllers/booksControllers.js";
import { initEventsListeners } from "./src/events/booksEvents.js";
import { initEventsUser } from "./src/events/userEvents.js";

document.addEventListener("DOMContentLoaded", async () => {
  await loadBooks();
  initEventsListeners();
  initEventsUser();
});
