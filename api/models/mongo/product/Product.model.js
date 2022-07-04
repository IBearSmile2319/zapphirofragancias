const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
    },
    productPicture: [
      {
        imgId: { type: Schema.Types.ObjectId, ref: "Image" },
      },
    ],
    stock: { type: Number, default: 0 },
    competed: {
      type: String,
    },
    ofactoryFamily: {
      type: String,
    },
    createdBy: { type: Schema.Types.ObjectId, ref: 'Admin' },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'Admin' },
    status: { type: Boolean, default: true },
    dimension: [
      {
        name: { type: String },
        valor: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
)

module.exports = model("Product", productSchema)
