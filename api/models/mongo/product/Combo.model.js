const { Schema, model } = require("mongoose");


const comboSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
        },
        icon: {
            type: String,
            required: true
        },
        position: {
            type: Number,
        },
        status: {
            type: Boolean,
            default: true
        },
        imagen:{
            type: String,
        },
        createdBy: { type: Schema.Types.ObjectId, ref: 'Admin' },
        products: [
            { 
                productId: { type: Schema.Types.ObjectId, ref: 'Product' },
                quantity: { type: Number, required: true },
                price: { type: Number, required: true },
            }
        ],
        price: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);


module.exports = model("Combo", comboSchema);