import mongoose from "mongoose"

const detailSchema = new mongoose.Schema({
    images: {
        type: [String],
    },
    title: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const Details = new mongoose.model("details", detailSchema);