const { Schema, model } = require("mongoose");

const StoresSchema = new Schema({
    name: { 
        type: String,
        required: true,
    },
    slug: {
        type: String,
    },
    reference: {
        type: String,
        required: true,
    },
    latitude: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    products: [
        {
            product: { type: Schema.Types.ObjectId, ref: 'Product' },
            stock: { type: Number, default: 0 },
        }
    ]
},{
    timestamps: true,
})

module.exports = model("Stores", StoresSchema)