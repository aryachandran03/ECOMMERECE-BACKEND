import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  description: String
}, { timestamps: true });

export default mongoose.model("Product", productSchema);