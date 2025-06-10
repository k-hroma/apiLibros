import {
  allUsers,
  createUser,
  logUser,
} from "../controllers/usersControllers.js";
export const formUser = document.getElementById("subUser");

export const formLog = document.getElementById("subLogin");

export const formGetAll = document.getElementById("getallUsers");

const initEventsUser = () => {
  formUser.addEventListener("submit", createUser);
  formLog.addEventListener("submit", logUser);
  formGetAll.addEventListener("submit", allUsers);
};

export { initEventsUser };
