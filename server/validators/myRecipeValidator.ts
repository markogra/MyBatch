import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const myRecipeValidator = [
  body('name').notEmpty().withMessage('name is required').trim().escape(),
  body('style').notEmpty().withMessage('style is required').trim().escape(),
  body('instructions').notEmpty().withMessage('instructions is required').trim().escape(),
  body('ingredients').notEmpty().withMessage('ingredients is required').trim().escape(),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }
    next();
  }
];