import mongoose from "mongoose";


const userSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 10
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 7
    },
    date: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        enum : ['CUSTOMER','MERCHANT'],
        default: 'MERCHANT'
    },
});

const User =  mongoose.model('User',userSchema);

export default User;