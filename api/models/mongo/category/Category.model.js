const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
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
    //parentId
    status:{
        type:Boolean,
        default:true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Category", productSchema);