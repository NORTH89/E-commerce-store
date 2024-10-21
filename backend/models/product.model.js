import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price cannot be negative"]
    },
    image: {
        type: String,
        required: [true, "Image product required"],
    },
    category: {
        type: Boolean,
        required: false},
    isFeatured: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

export default Product
