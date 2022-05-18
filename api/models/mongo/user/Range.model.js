const { Schema, model } = require('mongoose');

const rangeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
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
    createdBy: { type: Schema.Types.ObjectId, ref: 'Admin' },
}, {
    timestamps: true
});

module.exports = model('Range', rangeSchema);