const { beerRecipe, addIngredient, myRecipe } = require("./models/models");
import { Request, Response } from 'express';

exports.getAllIngredients = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await addIngredient.find();
    console.log(response);
    res.status(200);
    res.send(response);
  } catch (err) {
    res.send(err);
  }
};

exports.createIngredients = async (req: Request, res: Response): Promise<void> => {
  console.log(req.body);
  const { name, amount, type } = req.body;
  try {
    const ingredient = await addIngredient({
      name,
      amount,
      type,
    }).save();
    res.status(201).send(ingredient);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

exports.deleteIngredient = async (req: Request, res: Response): Promise<void> => {
  try {
    const ingredientId = req.params.id;
    const ingredient = await addIngredient.findById(ingredientId);
    await ingredient.deleteOne({ _id: ingredientId });
    console.log("Item deleted");
    res
      .status(200)
      .json({ success: true, message: "Ingredient deleted successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, error: "Failed to delete ingredient" });
  }
};

exports.getOurRecipes = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await beerRecipe.find();

    res.status(200);
    res.send(response);
  } catch (error) {
    console.log("ERROR!!!! " + error);
  }
};

exports.getMyRecipes = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await myRecipe.find();
    console.log("Response on my recipes");
    console.log(response);
    res.status(200).send(response);
  } catch (error) {
    console.log("ERROR!!!! " + error);
  }
};

exports.postMyRecipe = async (req: Request, res: Response): Promise<void> => {
  console.log(req.body);
  try {
    const { name, style, ingredients, instructions } = req.body;
    const newRecipe = new myRecipe({
      name,
      style,
      ingredients,
      instructions,
    });
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    console.log("ERROR!!! " + error);
    res.status(500);
  }
};

exports.postOurRecipe = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, style, description, batchSize, ingredients, instructions} = req.body;
    const newRecipe = new beerRecipe({
      name,
      style,
      description,
      batchSize,
      ingredients,
      instructions,
    });
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch(err) {
    console.error(err);
    res.status(500);
  }
}