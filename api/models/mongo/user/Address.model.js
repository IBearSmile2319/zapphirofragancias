const { Schema, model } = require('mongoose');

const addressSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    fullName: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    alternativePhoneNumber: {
        type: String,
    },
    zipCode: {
        type: String,

    },
    street: {
        type: String,
    },
    number: {
        type: String,
    },
    neighborhood: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    country: {
        type: String,
    },
    reference: {
        type: String,
    },
    latitude: {
        type: String,

    },
    longitude: {
        type: String,
    },
    type: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true,
    },
});

module.exports = model('Address', addressSchema);