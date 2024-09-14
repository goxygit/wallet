import { Request, Response } from "express"
import Transaction from "../models/Transaction"

type TransactionType ={
    id:number
    title: string
    type: boolean 
    count: number
    categoryId: number
    userId:number
} | null

export const getAllTransaction = async(req: Request,res:Response)=>{
    const {user} = req

    if(user){
    const transaction = await Transaction.findAll({where: {userId: user.id} })
    return res.json(transaction)}
}
export const getOneTransaction = async(req: Request,res:Response)=>{
    const {transactionId } = req.params
    const {user} = req

    if(user){
    
    const transaction: TransactionType = await Transaction.findOne({where:{transactionId,userId: user.id}})

    return res.json(transaction)}
}
export const createTransaction = async(req: Request,res:Response)=>{
    const {title, type, count,categoryId } = req.body
    const {user} = req

    if(user){
    const transaction = await Transaction.create({title, userId: user.id,type, count, categoryId})
    return res.json(transaction)}
}
export const updateTransaction = async(req: Request,res:Response)=>{

}
export const deleteTransaction = async(req: Request,res:Response)=>{

}