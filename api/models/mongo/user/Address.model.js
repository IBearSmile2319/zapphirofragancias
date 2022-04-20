const { Schema, model } = require('mongoose');

const addressSchema = new Schema({
    street: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    neighborhood: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    zipCode: {
        type: String,
        required: true,
    },
    reference: {
        type: String,
    },
    latitude: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    type: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true
});

module.exports = model('Address', addressSchema);