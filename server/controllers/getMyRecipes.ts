import { myRecipes } from "../models/models";
import { Request, Response } from 'express';
import { MyRecipe } from '../types';

export const getMyRecipes = async (req: Request, res: Response): Promise<void> => {
  try {
    const response: MyRecipe = await myRecipes.find();
    res.status(200).send(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '500, Server Error' });
  }
};