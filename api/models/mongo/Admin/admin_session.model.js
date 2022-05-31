const { Schema, model } = require("mongoose");

const adminSessionSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "Admin",
            required: true,
        },
        valid: {
            type: Boolean,
            default: true,
        },
        userAgent: { type: String},
        ip: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model("AdminSession", adminSessionSchema);