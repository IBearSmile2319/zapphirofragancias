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
    }
}, {
    timestamps: true
});

module.exports = model('Range', rangeSchema);