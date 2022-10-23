import express from "express";
import { ErrorHandler } from "./middleware/ErrorHandler";
import router from "./routes/UserRoutes";

const app = express()

app.use(express.json())
app.use('/users', router)
app.use(ErrorHandler.handle)

export default app
