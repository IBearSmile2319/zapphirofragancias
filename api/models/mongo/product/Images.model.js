const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    URL: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: unique,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Image", productSchema);
