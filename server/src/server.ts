import express, { Application ,json} from "express"
import { startServer } from "./lib/boot"
import { authRouter } from "./routes/auth.routes"

const app: Application = express()
app.use(json())

app.use('/auth', authRouter)

startServer(app)