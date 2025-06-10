import express from 'express'
import cors from 'cors'
import { routerBook } from './routes/bookRouter'
import { authRouter } from './routes/authRouter'


const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/books", routerBook)
// 1. auth-> authorization
app.use("/api/auth", authRouter)

export { app }