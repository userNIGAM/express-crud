import express from "express"
import {connectDb} from "./config/db.js"
import cors from "cors"

import detailRoute from "./routes/detailRoute.js"

import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json())
app.use(cors({credential: true}))

app.use("/api/details",detailRoute)

connectDb()
app.listen(PORT, (req, res) => {
    console.log(`Server Running on ${PORT}`)
})