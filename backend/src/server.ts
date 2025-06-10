import { connectMongoDb } from "./config/dbMongoDB";
import dotenv from 'dotenv'
import { app } from "./app";
dotenv.config()

const PORT = process.env.PORT || 300
const startServer = async () => {
  if (!PORT) {
    return {
      success: false,
      message: "PORT credentials missing or empty"
    }
   }
  try {
    const connection = await connectMongoDb();
    if (!connection.success) {
      throw new Error(connection.message);
    }
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🔗 http://localhost:${PORT}/api/books`);
     })  
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error"
    console.error(`❌ Fatal startup error: ${errMsg}`);
    process.exit(1);
 }
 }

startServer()