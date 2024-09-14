import { authMiddleware } from './../middlewares/auth';
import { createUser } from './../middlewares/user';
import { inputValidationMiddleware } from '../middlewares/input';
import { Router } from "express";
import * as userController from '../controllers/userController'
const userRouter =  Router({})

userRouter.post('/registration',createUser,inputValidationMiddleware,userController.registration)
userRouter.post('/login',userController.login)
userRouter.get('/auth',authMiddleware, userController.getMe)

export {userRouter}