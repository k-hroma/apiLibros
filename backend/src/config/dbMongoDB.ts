import { connect, ConnectOptions } from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

interface ConnectionResult { 
  success: boolean,
   message: string
}

const options: ConnectOptions = {
  serverSelectionTimeoutMS: 500,
  maxPoolSize: 10,
  autoIndex:true
} 

const connectMongoDb = async (): Promise<ConnectionResult> => {
  const URI_DB = process.env.URI_DB

  if (!URI_DB || typeof URI_DB !== "string") {
    return {
      success: false,
      message: "MongoDB connection string missing or empty"
    }
  }

  try {
    await connect(URI_DB, options)
    console.log("📦 Connected to MongoDB successfully")
    return {
      success: true,
      message: "✅ MongoDB connection established."
    }
    
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error"
    console.error(`MongoDB connection failed: ${errMsg}`)
    return {
      success: false,
      message: `MongoDB connection failed: ${errMsg}`
    }
  }
};

export { connectMongoDb }