import { beerRecipe, addIngredient, myRecipe } from "./models/models";
import { Request, Response } from 'express';
import {
  Ingredient,
  CreatedIngredient,
  Recipe,
  MyRecipe,
  PostedMyRecipe,
  PostedOurRecipe
} from './types';


export const getAllIngredients = async (req: Request, res: Response): Promise<void> => {
  try {
    const response: Ingredient[] = await addIngredient.find();
    res.status(200);
    res.send(response);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

export const createIngredients = async (req: Request, res: Response): Promise<void> => {
  const { name, amount, type } = req.body;
  try {
    if(!name || !amount || !type) {
      res.status(400).json({ message: 'Missing required fields' });;
    }

    const cleanedName = name.replace(/{|}/g, '');
    const cleanedAmount = amount.replace(/{|}/g, '');
    const cleanedType = type.replace(/{|}/g, '');

    const ingredient: CreatedIngredient = await addIngredient({
      name: cleanedName,
      amount: cleanedAmount,
      type: cleanedType,
    }).save();
    res.status(201).send(ingredient);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

export const deleteIngredient = async (req: Request, res: Response): Promise<void> => {
  try {
    const ingredientId = req.params.id;
    const ingredient = await addIngredient.findById(ingredientId);
    await ingredient.deleteOne({ _id: ingredientId });
    res
      .status(200)
      .json({ success: true, message: "Ingredient deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, error: "Failed to delete ingredient" });
  }
};

export const getOurRecipes = async (req: Request, res: Response): Promise<void> => {
  try {
    const response: Recipe = await beerRecipe.find();

    res.status(200);
    res.send(response);
  } catch (error) {
      console.error(error);
  }
};

export const getMyRecipes = async (req: Request, res: Response): Promise<void> => {
  try {
    const response: MyRecipe = await myRecipe.find();
    res.status(200).send(response);
  } catch (error) {
    console.error(error);
  }
};

export const postMyRecipe = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, style, ingredients, instructions } = req.body;
    if(!name || !style || !ingredients || !instructions) {
      res.status(400).json({ message: 'Missing required fields' });;
    }

    const newRecipe = new myRecipe({
      name,
      style,
      ingredients,
      instructions,
    });
    const savedRecipe: PostedMyRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

export const postOurRecipe = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, style, description, batchSize, ingredients, instructions} = req.body;
    if(!name || !style || !description || !batchSize || !ingredients || !instructions) {
      res.status(400).json({ message: 'Missing required fields' });;
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
    res.status(500);
  }
}