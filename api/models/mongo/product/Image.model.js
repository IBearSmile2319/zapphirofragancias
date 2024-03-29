const { Schema, model } = require("mongoose");

const imageSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Image", imageSchema);
