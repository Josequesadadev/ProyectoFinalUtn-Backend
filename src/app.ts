// src/app.ts
import express, { Request, Response } from "express"
import cors from "cors"
import morgan from "morgan"
import path from "node:path"
import fs from "node:fs"

import productRouter from "./routes/productRoutes"
import authRouter from "./routes/authRouter"
import logger from "./config/logger"
import IUserTokenPayload from "./interfaces/IUserTokenPayload"

declare global {
  namespace Express {
    interface Request {
      user?: IUserTokenPayload
    }
  }
}

const app = express()

// ===== Middlewares globales =====
app.use(cors())
app.use(express.json())
app.use(logger)
app.use(morgan("dev"))

// ===== Carpeta uploads =====
const uploadsPath = path.join(__dirname, "../uploads")

if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true })
}

app.use("/uploads", express.static(uploadsPath))

// ===== Rutas =====
app.get("/", (_: Request, res: Response) => {
  res.json({ status: true })
})

app.use("/auth", authRouter)
app.use("/products", productRouter)


// ===== 404 =====
app.use((_: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: "El recurso no se encuentra"
  })
})

export default app
