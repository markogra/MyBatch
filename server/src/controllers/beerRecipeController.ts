import BeerRecipe from "../models/beerRecipeModel";
import InventoryItem from "../models/inventoryItemModel";
import { checkIfEnoughIngredients, reduceIngredients} from "../utils/brewHelper";
import { Request, Response} from "express";


export const getAllBeerRecipes = async (req:Request, res:Response) => {
  try {
    const allBeerRecipes = await BeerRecipe.find();

    res.status(200).json({
      status:'Success',
      results:allBeerRecipes.length,
      data:allBeerRecipes
    });
  } catch(err) {
    const error = err as Error;
    res.status(404).json({
      status:'Fail',
      message:error.message
    })
    
  }
};


export const brewRecipe = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { recipeId } = req.body;

    if (!recipeId) {
      return res.status(400).json({
        status: "fail",
        message: "Recipe ID is required.",
      });
    }

    const allInventoryItems = await InventoryItem.find();
    const selectedRecipe = await BeerRecipe.findById(recipeId);
    console.log(selectedRecipe)

    if (!selectedRecipe) {
      return res.status(404).json({
        status: "fail",
        message: "Recipe not found.",
      });
    }

    const enoughIngredients = checkIfEnoughIngredients(
      selectedRecipe.ingredients,
      allInventoryItems
    );

    if (!enoughIngredients) {
      return res.status(400).json({
        status: "fail",
        message: "Not enough ingredients to brew the recipe.",
      });
    }

    await reduceIngredients(
      selectedRecipe.ingredients,
      allInventoryItems,
      async (id: string, updatedAmount: number) => {
        await InventoryItem.updateOne({ _id: id }, { $set: { amount: updatedAmount } });
      }
    );

    return res.status(200).json({
      status: "success",
      message: `Recipe ${selectedRecipe.name} brewed successfully!`,
    });
  } catch (error) {
    console.error("Error in brewRecipe:", error);
    return res.status(500).json({
      status: "fail",
      message: "Internal server error. Please try again later.",
    });
  }
};
