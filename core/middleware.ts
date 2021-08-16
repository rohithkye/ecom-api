import jwt from 'jsonwebtoken';
import express  from 'express';


const auth = (req:express.Request,res:express.Response,next:Function) => {
    const token =  req.header('auth-token');
    if(!token){
        return res.status(401).send('Access Denied');
    }
    try{
        const verified = jwt.verify(token,"nandu");
        // req.user = verified;
        next();
    }catch(err){
        return res.status(400).send('Invalid token');
    }
}
export default auth;