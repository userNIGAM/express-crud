import express from "express"
import { registerBooking } from "../controllers/bookingController"

const router = express.Router()

router.post("/create-booking", registerBooking);

export default router;