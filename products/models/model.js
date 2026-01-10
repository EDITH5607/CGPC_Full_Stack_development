const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
      name:String,
      price:Number,
      description:String,
      image:String

})

const product = new mongoose.model("products",productSchema)
module.exports = product