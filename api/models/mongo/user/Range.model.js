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
        unique: true
    },
    price: {
        type: Number,
        default: 150
    }
}, {
    timestamps: true
});

module.exports = model('Range', rangeSchema);