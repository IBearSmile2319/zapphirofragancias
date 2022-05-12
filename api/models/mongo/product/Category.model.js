const { Schema, model } = require("mongoose");

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: String,
      unique: true,
    },
    icon: {
      type: String,
      required: true,
    },
    slug: { type: String, required: true, unique: true },
    status: {
      type: Boolean,
      default: true,
    },
    parentId: {
      type: String,
      unique: true,
    },
    createdBy: { type: Schema.Types.ObjectId, ref: 'Admin' },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Category", categorySchema);