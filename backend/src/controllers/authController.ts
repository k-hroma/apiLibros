import { Request, Response } from "express";
import bcryptjs from 'bcryptjs'
import { Auth } from "../models/authModel";
import { User } from "../types/authType";

const getAllUsers = async (req: Request, res: Response): Promise<any> => {
  try {
    const allUsers = await Auth.find()
    const newUsers:Array<any> = []
    allUsers.forEach(user => {
      const { username, email, _id } = user
      newUsers.push({username, email, _id})
    })
    
    return res.status(200).json({
      success: true,
      message: allUsers.length > 0 ? "Users: " : "No users found",
      data: newUsers
    })
    
  } catch (error) {
    const err = error as Error
    res.status(500).json({
      success: false,
      message: err.message
    
    })
  }
}

const register = async (req: Request, res: Response): Promise<any> => {
  try {
    const { username, email, password } = req.body
    
    if (!username || !email || !password) { 
      const errMsg = "Username, email and password are requiered;"
      console.error(errMsg)
      return res.status(401).json({
        success: false,
        message: errMsg,
      });
    }
    // hashear la contraseña: npm i bcryptjs
    const hash = await bcryptjs.hash(password, 10)
    const newDataUser = {
      username: username,
      email: email,
      password: hash
    }

    // crea un nuevo registro y se guarda con mongoose en la MongoDB
    const newUser = await new Auth(newDataUser).save()
  
    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {_id:newUser._id, username:newUser.username, email:newUser.email}
    })

    
  } catch (error) {
    const err = error as Error
    res.status(500).json({
      success: false,
      message: err.message
    })
    
  }
};

const login= async (req: Request, res: Response): Promise<any> => {
  try {

    const { email, password }: Partial<User> = req.body

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "data invalida"
      })
    }

    const user = await Auth.findOne({ email })
    if (!user) { 
      return res.status(401).json({
        success: false,
        message: "Unauthorized"
      })
    }
    
    const validatePassword = await bcryptjs.compare(password!, user.password)
    if (!validatePassword) { 
      return res.status(401).json({
        success: false,
        message: "Unauthorized"
      })
    }

    return res.status(200).json({
      success: true,
      message: "User authorized",


    })
    
  } catch (error) {
    const err = error as Error
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
};

export { register, login, getAllUsers }