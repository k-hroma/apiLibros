// Renderizado y manipulación directa del DOM (crear tarjetas, manejar clases, inputs)

const renderBookCard = (book) => {
  try {
    const { title, isbn, _id } = book;
    const card = document.createElement("div");
    card.dataset.id = _id;
    card.classList.add("item-card");
    const titleEl = document.createElement("h3");
    const isbnEl = document.createElement("h4");
    const btnCont = document.createElement("div");
    const btnDelete = document.createElement("button");
    const btnUpdate = document.createElement("button");
    const gridCont = document.getElementById("gridContainer");
    gridCont.append(card);
    card.append(titleEl);
    card.append(isbnEl);
    card.append(btnCont);
    btnCont.append(btnDelete, btnUpdate);
    titleEl.textContent = title;
    titleEl.classList.add("titleIn");
    isbnEl.textContent = isbn;
    isbnEl.classList.add("isbnIn");
    btnDelete.textContent = "DELETE";
    btnDelete.classList.add("delete-btn");
    btnUpdate.textContent = "UPDATE";
    btnUpdate.classList.add("update-btn");
    btnCont.classList.add("btn-container");
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    console.error(`Error renderBook: ${errMsg}`);
  }
};

const fillForm = (book) => {
  const { title, isbn } = book;
  document.getElementById("titleIn").value = title;
  document.getElementById("isbnIn").value = isbn;
};

const clearBooks = () => {
  const grid = document.getElementById("gridContainer");
  grid.innerHTML = "";
};
export { renderBookCard, fillForm, clearBooks };
