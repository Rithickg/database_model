import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    imageCollections: [{
        type: Object
    }],
    product: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    material: {
        type: String,
        required: true,
    },
    productAdjective: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true,
    }
}, { timestamps: true })

export default mongoose.model("Product", productSchema)