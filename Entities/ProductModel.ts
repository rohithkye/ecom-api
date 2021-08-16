import mongoose from "mongoose";


const productSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    description:{
        type:String,
        max:10000,
        min:100,
        default:'Loream ipsum dolor sit.'
    },
    price: {
        type: Number,
        required: true,
        min: 10
    },
    image:{
        type:String,
        default:"https://picsum.photos/300"
    },
    quantity: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const Product =  mongoose.model('Product',productSchema);

export default Product;