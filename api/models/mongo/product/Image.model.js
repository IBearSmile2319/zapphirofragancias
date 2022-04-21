const { Schema, model } = require("mongoose");

const imageSchema = new Schema(
  {
    url: {
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

module.exports = model("Image", imageSchema);
