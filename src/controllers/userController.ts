import { Request, Response } from "express"
import User from "../models/User"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();

const generateJWT = async({id, email}: {id:number, email:string})=>{
    const token = await jwt.sign(
        {id, email},
         process.env.SECRET_KEY as string, 
         {expiresIn:'7d'}
        )
        return token
}

export const registration = async(req: Request,res:Response)=>{
    try{
        const {email, password} = req.body
        const candidate = await User.findOne({where: {email}})
        if(candidate)
            return  res.status(400).json({message: 'user already exists'})
        const hashPassword = await bcrypt.hash(password, 6)
        const user = await User.create({email, password:hashPassword})
//@ts-ignore
        const token = await generateJWT({id: user.id, email})


        res.cookie('Authorization', token, {
            maxAge: 3600000 * 24 * 7, // 7 дней
        httpOnly: true,  // Предотвращает отправку куки с других сайтов (защита от CSRF)
          });
          return res.json({token, user})
        }
    catch(e){

    }
    
}
export const login = async(req: Request,res:Response)=>{
    const {email, password} = req.body
    const user = await User.findOne({where: {email}})

    if(!user)
      return res.status(401).json({message: 'Incorrect email or password'})

    const comparePassword = bcrypt.compareSync(password, user?.password)

    if(!comparePassword)
      return res.status(401).json({message: 'Incorrect email or password'})

    const token = await generateJWT({email, id: user.id})


    res.cookie('Authorization', token, {
        maxAge: 3600000 * 24 * 7, // 7 дней
        httpOnly: true, // Предотвращает отправку куки с других сайтов (защита от CSRF)
      });
      return res.json({token, user})
    }

export const getMe = async(req: Request,res:Response)=>{
    const {user} = req


    if(user){
    const token = await generateJWT({id: user.id, email: user.email})
    

    res.cookie('Authorization', token, {
        maxAge: 3600000 * 24 * 7, // 7 дней
        httpOnly: true,  // Предотвращает отправку куки с других сайтов (защита от CSRF)
  });
  return res.json({token, user})
}
}