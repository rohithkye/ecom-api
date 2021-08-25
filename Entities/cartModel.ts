import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  pid: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
