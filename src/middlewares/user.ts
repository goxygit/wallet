import { body } from 'express-validator';


export const createUser =  [
    body('email')
    .isEmail()
    .withMessage('Please enter a valid email address.'),

    body('password').trim().isLength({min:7, max:20}).withMessage('The password must be no shorter than 7 and no longer than 20 characters')
    .matches(/[A-Z]/) // Check for at least one uppercase letter
      .withMessage('Password must contain at least one uppercase letter.')
      .matches(/\d/) // Check for at least one digit
      .withMessage('Password must contain at least one digit.')
    ]

