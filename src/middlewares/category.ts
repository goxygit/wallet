import { body, validationResult } from "express-validator";

export const createCategory = body('title').trim().isLength({min:3, max:20}).withMessage('o kurwa')
