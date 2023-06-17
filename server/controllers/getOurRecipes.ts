import { beerRecipe } from "../models/models";
import { Request, Response } from 'express';
import { Recipe } from '../types';

export const getOurRecipes = async (req: Request, res: Response): Promise<void> => {
  try {
    const response: Recipe = await beerRecipe.find();

    res.status(200);
    res.send(response);
  } catch (error) {
      console.error(error);
  }
};