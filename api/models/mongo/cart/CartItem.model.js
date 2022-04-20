const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    ProductId: { type: Schema.Types.ObjectId, ref: "Product" },
    quantity:{
        type:Number,
        default:0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("CartItem", productSchema);