import { addIngredient } from "../models/models";
import { Request, Response } from 'express';

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
