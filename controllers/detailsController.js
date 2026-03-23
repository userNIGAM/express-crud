import { Details } from "../models/details.js"

//Create the incoming details of the product with proper fields
export const createDetails = async (req, res) => {
    const { title, details, brand, color, model, price, quantity } = req.body;

    try {
        if (
            !title ||
            !details ||
            !brand ||
            !color ||
            !model ||
            price == null ||
            quantity == null
        ) {
            return res.status(400).json({ msg: "All fields are required" });
        }
        
        const imageUrls = req.files?.map(file => file.path) || [];
        const newDetails = await Details.create({
            image: imageUrls, //Cloudinary Url for images
            title,
            details,
            brand,
            color,
            model,
            price,
            quantity
        });

        res.status(201).json({ msg: "Details created!!", data: newDetails });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


//Update the product list
export const updateDetails = async (req, res) => {

    try {
        const { id } = req.params;

        let updatedData = {...req.body}

        if (req.file && req.file.length > 0) {
            updateDetails.image = req.file.map(file => file.path)
        }
        const details = await Details.findByIdAndUpdate(
            id,
            { $set: req.body },
            updateDetails,
            { new: true }
        )



        if (!details) {
            //debug
            console.log("Couldnot update the details")
            return res.status(404).json({ msg: "Not Found" })
        }
        res.json({
            msg: "Updated Successfully!",
            details
        })
    } catch (error) {
        res.status(500).json({ error: error.message });

    }
}

//Delete Product
export const deleteDetails = async (req, res) => {
    try {
        const { id } = req.params
        const details = await Details.findByIdAndDelete(id)

        if (!details) {
            return res.status(404).json({ msg: "Not Found" })
        }
        res.json(
            { msg: "Deleted Successfully" },
            details
        )
    } catch (error) {

    }
}