const { Schema, model } = require("mongoose");

const paymentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    paymentStatus: {
        type: String,
        default: "En proceso",
        // enum: ["Pendiente", "Aprobado", "Rechazado", "cancelado", "reembolso"] 
    },
    paymentMethod: {
        type: String,
        default: "Transferencia",
        // enum: ["Paypal", "Tarjeta de credito", "Transferencia bancaria"]
    },
    paymentComission: {
        type: Number,
    },
    operationNumber: {
        type: String,
    },
    paymentNote: {
        type: String,
    },
    paymentMount: {
        type: Number,
    },
    img: {
        type: String,
    },
    paymentOrder: {
        type: Schema.Types.ObjectId,
        ref: "Order",
    },
    paymentDate: {
        type: Date,
        default: Date.now,
    },

}, {
    timestamps: true
})

// const userPaymentSchema = new Schema({
//     user: { type: Schema.Types.ObjectId, ref: "User", required: true },
//     payment: [paymentSchema],
// }, {
//     timestamps: true
// });

// model("Payment", paymentSchema);
// module.exports = model("userPayment", userPaymentSchema);
module.exports = model("Payment", paymentSchema);