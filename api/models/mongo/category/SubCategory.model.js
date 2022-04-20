const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    CategoryId: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    name:{
        type:String,
        required:String,
        unique:true,
    },
    icon:{
        type:String,
        required:true,
    },
    slug:{type:String,required:true,unique:true},
    status:{
        type:Boolean,
        default:true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Category", productSchema);