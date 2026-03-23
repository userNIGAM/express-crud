import express from "express"
import { createDetails, deleteDetails, updateDetails } from "../controllers/detailsController.js"
import { upload } from "../config/multer.js";

const router = express.Router();

router.post("/create", upload.array("images",3), createDetails)
router.patch("/update/:id",upload.array("images", 3), updateDetails)
router.delete("/delete/:id", deleteDetails)

export default router;