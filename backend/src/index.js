import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import connectDB from "./config/db.js";
import { errHandler, notFound } from "./middleware/errMiddleware.js";
import PostRoute from './routes/postRoute.js'

dotenv.config()
connectDB()

const PORT = 5000;
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.send(`Port is Running on http://localhost:${PORT}`)
})

app.use('/post',PostRoute)

app.use(notFound)
app.use(errHandler)

app.listen(PORT, console.log(`Port is Running on http://localhost:${PORT}`))