const { Schema, model } = require("mongoose");

const brandSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
        },
        createdBy: { type: Schema.Types.ObjectId, ref: 'Admin' },
        status: { type: Boolean, default: true },
    },
    {
        timestamps: true,
    }
)
module.exports = model("Brand", brandSchema)