import express from "express"
import {connectDb} from "./config/db.js"
import taskRoute from "./routes/taskRoute.js"

import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json())

app.use("api/task", taskRoute)

connectDb()
app.listen(PORT, (req, res) => {
    console.log(`Server Running on ${PORT}`)
})