import { myRecipes } from "../models/models";
import { Request, Response } from 'express';
import { PostedMyRecipe } from '../types';

export const postMyRecipe = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, style, ingredients, instructions } = req.body;

    const newRecipe = new myRecipes({
      name,
      style,
      ingredients,
      instructions,
    });

    const savedRecipe: PostedMyRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '500, Server Error' });
  }
};