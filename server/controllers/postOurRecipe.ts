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

    const cleanedName = name.replace(/{|}/g, '');
    const cleanedStlye = style.replace(/{|}/g, '');
    const cleanedDescription = description.replace(/{|}/g, '');
    const cleanedBatchSize = batchSize.replace(/{|}/g, '');

    const newRecipe = new beerRecipe({
      name: cleanedName,
      style: cleanedStlye,
      description: cleanedDescription,
      batchSize: cleanedBatchSize,
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