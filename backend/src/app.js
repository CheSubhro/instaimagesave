
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'
import imageRouter from './routes/image.routes.js'
import reelsRouter from './routes/reels.routes.js'

//routes declaration
app.use("/api/v1/users", userRouter)
app.use("/api/v1/image", imageRouter)
app.use("/api/v1/reels", reelsRouter)


export { app }