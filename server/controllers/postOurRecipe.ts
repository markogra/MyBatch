import { ourRecipes } from "../models/models";
import { Request, Response } from 'express';
import { PostedOurRecipe } from '../types';

export const postOurRecipe = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, style, description, batchSize, ingredients, instructions} = req.body;

    const newRecipe = new ourRecipes({
      name,
      style,
      description,
      batchSize,
      ingredients,
      instructions,
    });

    const savedRecipe: PostedOurRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch(error) {
    console.error(error);
    res.status(500).json({ message: '500, Server Error' });
  }
}