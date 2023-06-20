import { ourRecipes } from "../models/models";
import { Request, Response } from 'express';
import { Recipe } from '../types';

export const getOurRecipes = async (req: Request, res: Response): Promise<void> => {
  try {
    const response: Recipe = await ourRecipes.find();
    res.status(200).send(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '500, Server Error' });
  }
};