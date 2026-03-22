import express from "express"
import {createTask, getAllTask, getTask, updateTask} from "../controllers/taskController.js"

const router = express.Router();

router.post("/create", createTask)
router.get("/getTask", getAllTask)
router.get("/:id", getTask)
router.patch("/:id", updateTask)

export default router;