import { Ingredients } from "../models/models";
import { Request, Response } from 'express';
import { Ingredient } from '../types';

export const getAllIngredients = async (req: Request, res: Response): Promise<void> => {
  try {
    const response: Ingredient[] = await Ingredients.find();
    res.status(200).send(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '500, Server Error' });
  }
};