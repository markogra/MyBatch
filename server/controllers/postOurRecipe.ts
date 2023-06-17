import { beerRecipe } from "../models/models";
import { Request, Response } from 'express';
import { PostedOurRecipe } from '../types';

export const postOurRecipe = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, style, description, batchSize, ingredients, instructions} = req.body;
    if(!name || !style || !description || !batchSize || !ingredients || !instructions) {
      res.status(400).json({ message: 'Missing required fields' });;
      return;
    }

    const newRecipe = new beerRecipe({
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