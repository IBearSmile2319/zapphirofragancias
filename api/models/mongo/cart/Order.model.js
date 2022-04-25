const { model, Schema } = require('mongoose');

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    address: { type: Schema.Types.ObjectId, ref: 'UserAddress.address' },
    items: [
        {
            product: { type: Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, default: 1 },
            price: { type: Number, default: 0 },
        },
        {
            product: { type: Schema.Types.ObjectId, ref: 'Range' },
        }
    ],
    total: { type: Number, default: 0 },
    payment: { type: Schema.Types.ObjectId, ref: 'userPayment.payment' },
    orderStatus: [
        {
            status: {
                type: String,
                default: "Pendiente confirmación",
                // enum: ["pendiente","confirmado para envio","enviado", "entregado", "cancelado", "reembolso"] 
            },
            date: { type: Date, default: Date.now },
            Completed: { type: Boolean, default: false },
        }
    ],
    status: { type: Boolean, default: false },
    assistant : { type: Schema.Types.ObjectId, ref: 'User' },
}, {
    timestamps: true
});

module.exports = model('Order', orderSchema);
