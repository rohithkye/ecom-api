import { Router } from "express";
import User from "../Entities/UserModel"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const logInRouter = Router();

logInRouter.post("/", async (req, res) => {
    const user = await User.findOne({email:req.body.email});
    if(!user) {
        return res.status(400).send('Email do not exist');
    }
    const validPswd = await bcrypt.compare(req.body.password,user.password)
    if(!validPswd){
        return res.status(400).send('invalid password');
    }
    //token
    const token = jwt.sign({_id:user._id,role:user.role}, "qwertyuiop");
    res.header('auth-token', token);
    res.send('Log in success!!');
});

export default logInRouter;