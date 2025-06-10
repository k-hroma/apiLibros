import { Router } from "express"
import { login, register, getAllUsers } from "../controllers/authController"

const authRouter = Router()

// register -> petición post
authRouter.get("/", getAllUsers)
authRouter.post("/register", register)



// login -> petición post
authRouter.post("/login", login)


export { authRouter }