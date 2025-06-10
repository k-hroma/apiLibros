import { getUsers, registerUser, loginUser } from "../api/usersService.js";
import { formUser, formLog } from "../events/userEvents.js";
const createUser = (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;
  const newUser = {
    username,
    email,
    password,
  };
  registerUser(newUser);
  formUser.reset();
};

const logUser = (e) => {
  e.preventDefault();
  const email = document.getElementById("userLog").value;
  const password = document.getElementById("passwordLog").value;
  const userLog = {
    email,
    password,
  };
  loginUser(userLog);
  formLog.reset();
};

const allUsers = (e) => {
  e.preventDefault();
  getUsers();
};
export { createUser, logUser, allUsers };
