import { authMiddleware } from './../middlewares/auth';
import { Router } from "express";
import * as transactionController from '../controllers/transactionController'
const transactionRouter =  Router({})

transactionRouter.post('/',authMiddleware, transactionController.createTransaction)
transactionRouter.get('/',authMiddleware, transactionController.getAllTransaction)
transactionRouter.get('/:id',authMiddleware,transactionController.getOneTransaction)

export {transactionRouter}