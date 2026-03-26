import { Booking } from "../models/Booking";

export const registerBooking = async(req, res) =>{
    const {name, phone, itemType,address,description,condition } = req.body
     try {
        const payload = {name, phone, itemType,address,description,condition }

        if(
            !name ||
            !phone ||
            !itemType ||
            !address ||
            !description ||
            !condition 
        ){
            console.log("Invalid credentials")
            return res.status(400).json({msg: "All field are required"})
        }
        const newBooking = await Booking.create(payload);

        res.status(200).json({msg: "Booking created"})

     } catch (error) {
        
     }
}