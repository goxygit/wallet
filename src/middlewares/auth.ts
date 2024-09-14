import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import  dotenv from 'dotenv';

dotenv.config()
const secret = process.env.SECRET_KEY as string

export type UserType ={
    id:number
    email:string
}

export const authMiddleware = async(req:Request, res:Response, next:NextFunction)=>{
    try{
        const token = req.headers.authorization?.split(' ')[1]
        if(!token)
            return res.status(401).json({message:'Unauthorized'})
        
        const decoded = jwt.verify(token, secret )
        //@ts-ignore
        req.user = decoded
        next()

    }
    catch(e){
       return res.status(401).json({message:'Unauthorized'})
    }
}