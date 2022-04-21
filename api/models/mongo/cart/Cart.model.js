const { Schema, model } = require("mongoose");

const cartSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User",required:true},
    carttItem: [{ 
     product:{type: Schema.Types.ObjectId, ref: "Product",required:true},
     quantity:{
      type:Number,
      required:true,
      }, 
    }],
  },
  {
    timestamps: true,
  }
)

module.exports = model("Cart", cartSchema)