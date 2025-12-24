import dotenv from "dotenv"
import app from "./app"
import connectDB from "./config/mongodb"

dotenv.config()

const PORT = Number(process.env.PORT) || 3000

app.listen(PORT, () => {
  console.log(`✅ Servidor en escucha en http://localhost:${PORT}`)
  connectDB()
})
