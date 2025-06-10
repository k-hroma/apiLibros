// las funciones para interactuar con la api

const API_URL = "http://localhost:1234/api/auth/register";
const API_URLO = "http://localhost:1234/api/auth/login";

const getUsers = async () => {
  const allUsers = await fetch("http://localhost:1234/api/auth", {
    method: "GET",
  });

  const result = await allUsers.json();
  console.log(result, "esto es java ");
};

const registerUser = async (newUser) => {
  try {
    const addUser = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: { "Content-Type": "application/json" },
    });

    const res = await addUser.json();
    console.log(res);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    console.error("Error creating user:", errMsg);
    return {
      success: false,
      message: errMsg,
    };
  }
};

const loginUser = async (userLog) => {
  try {
    console.log(userLog);
    const response = await fetch(API_URLO, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userLog),
    });

    const result = await response.json();
    console.log(result);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    console.error("Error login user:", errMsg);
    return {
      success: false,
      message: errMsg,
    };
  }
};

export { getUsers, registerUser, loginUser };
