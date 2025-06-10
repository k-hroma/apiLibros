import { Schema, model } from "mongoose";
import { User } from '../types/authType'

const authSchema = new Schema<User>({
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, {versionKey: false})

const Auth = model<User>("Auth", authSchema)

export { Auth }

