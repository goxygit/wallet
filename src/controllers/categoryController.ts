import { Request, Response } from "express"
import Category from "../models/Category"
export const getAllCategory = async(req: Request,res:Response)=>{
    const {user} = req


   if(user){ 
    const category = await Category.findAll({where: {userId: user.id}})
    return res.json(category)
}
return res.status(400)
}
export const getOneCategory = async(req: Request,res:Response)=>{
    const {categoryId } = req.params
    const {user} = req
   
   if(user){
    const category = await Category.findOne({where:{categoryId, userId: user.id}})
    return res.json(category)
}
}
export const createCategory = async(req: Request,res:Response)=>{
    const {title} = req.body

    const {user} = req

    if(user){
    const category = await Category.create({title, userId: user.id})
    return res.json(category)
}
return res.status(400).json({message: 'o kurwa'})
}
export const updateCategory = async(req: Request,res:Response)=>{

}
export const deleteCategory = async(req: Request,res:Response)=>{

}