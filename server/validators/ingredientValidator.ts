import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const ingredientValidator = [
  body('name').notEmpty().withMessage('Name is required').trim().escape(),
  body('amount').notEmpty().withMessage('Amount is required').trim().escape(),
  body('type').notEmpty().withMessage('Type is required').trim().escape(),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }
    next();
  }
];
