const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
    },
    images: [{ type: Schema.Types.ObjectId, ref: 'Image' }],
    stock: { type: Number, default: 0 },
    competed: {
        type: String,
    },
    ofactoryFamily: {
        type: String,
    },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true, },
    status: { type: Boolean, default: true },
    dimension: {
        long: { type: Number, default: 0 },
        width: { type: Number, default: 0 },
        height: { type: Number, default: 0 },
        weight: { type: Number, default: 0 },
    },
}, {
    timestamps: true
});

module.exports = model('Product', productSchema);

