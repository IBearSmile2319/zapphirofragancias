const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    ProductId: [{ type: Schema.Types.ObjectId, ref: "CartItem" }],
    UserId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Cart", productSchema);