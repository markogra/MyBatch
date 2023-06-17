import { myRecipe } from "../models/models";
import { Request, Response } from 'express';
import { PostedMyRecipe } from '../types';

export const postMyRecipe = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, style, ingredients, instructions } = req.body;
    if(!name || !style || !ingredients || !instructions) {
      res.status(400).json({ message: 'Missing required fields' });;
      return;
    }

    const cleanedName = name.replace(/{|}/g, '');
    const cleanedStlye = style.replace(/{|}/g, '');
    const cleanedInstrctions = instructions.replace(/{|}/g, '');

    const newRecipe = new myRecipe({
      name: cleanedName,
      style: cleanedStlye,
      ingredients,
      instructions: cleanedInstrctions,
    });
    const savedRecipe: PostedMyRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '500, Server Error' });
  }
};