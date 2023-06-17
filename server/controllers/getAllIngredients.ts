import { addIngredient } from "../models/models";
import { Request, Response } from 'express';
import { Ingredient } from '../types';

export const getAllIngredients = async (req: Request, res: Response): Promise<void> => {
  try {
    const response: Ingredient[] = await addIngredient.find();
    res.status(200);
    res.send(response);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};