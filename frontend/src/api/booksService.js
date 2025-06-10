// funciones que interactuan con la API: get, post, patch, delete
const API_URL = "http://localhost:1234/api/books";

const getBooks = async () => {
  try {
    const res = await fetch(API_URL, {
      method: "GET",
    });
    const result = await res.json();
    console.log(result);

    if (!res.ok) {
      throw new Error(result.message || `HTTP error! status: ${res.status}`);
    }
    return result.data;
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    console.error("Error getting books:", errMsg);
    return {
      success: false,
      message: errMsg,
    };
  }
};

const addBook = async (newBook) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(newBook),
      headers: { "Content-Type": "application/json" },
    });

    const result = await res.json();
    console.log(result);

    if (!res.ok) {
      throw new Error(result.message || `HTTP error! status: ${res.status}`);
    }
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    console.error("Error creating book:", errMsg);
    return {
      success: false,
      message: errMsg,
    };
  }
};

const deleteBook = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    const result = await res.json();
    console.log(result);

    if (!res.ok) {
      throw new Error(result.message || `HTTP error! status: ${res.status}`);
    }
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    console.error("Error deleting book:", errMsg);
    return {
      success: false,
      message: errMsg,
    };
  }
};

const updateBook = async (id, bookData) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(bookData),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    console.log(result);
    if (!res.ok) {
      throw new Error(result.message || `HTTP error! status: ${res.status}`);
    }
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    console.error("Error updating book:", errMsg);
    return {
      success: false,
      message: errMsg,
    };
  }
};

export { getBooks, addBook, deleteBook, updateBook };
