const { Schema, model } = require('mongoose');

const addressSchema = new Schema({
    name: {
        type: String,
    },
    phone: {
        type: String,
    },
    alternatePhone: {
        type: String,
    },
    zipCode: {
        type: String,

    },
    street: {
        type: String,
        required: true,
    },
    number: {
        type: String,
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
const userAddressSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    address: [addressSchema],
}, {
    timestamps: true
});
model('Address', addressSchema);
module.exports = model('userAddress', userAddressSchema);