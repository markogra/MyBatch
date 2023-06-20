import { Ingredients } from "../models/models";
import { Request, Response } from 'express';
import { CreatedIngredient } from '../types';

export const createIngredients = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, amount, type } = req.body;

    if(!name || !amount || !type) {
      res.status(400).json({ message: 'Missing required fields' });
      return;
    }

    const cleanedName = name.replace(/{|}/g, '');
    const cleanedAmount = amount.replace(/{|}/g, '');
    const cleanedType = type.replace(/{|}/g, '');

    const ingredient: CreatedIngredient = await Ingredients({
      name: cleanedName,
      amount: cleanedAmount,
      type: cleanedType,
    }).save();
    res.status(201).send(ingredient);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '500, Server Error' });
  }
};