const { Schema, model } = require('mongoose');

const roleSchema = new Schema({
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

module.exports = model('Role', roleSchema);