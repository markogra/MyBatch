import express, { Request,Response } from 'express';
import { getAllInventoryItems, createInventoryItem ,deleteInventoryItem } from './controllers/inventoryItemController';
import { getAllBeerRecipes } from './controllers/beerRecipeController';
import { getAllMyRecipes, createMyRecipe } from './controllers/myRecipeController';

const router = express.Router()

router.get("/", function (req:Request, res:Response) {
  res.send("MyBatch server is running");
});

router.get("/inventory", getAllInventoryItems);
router.post("/inventory", createInventoryItem);
router.delete("/inventory/:id", deleteInventoryItem);
router.get("/our-recipes", getAllBeerRecipes);
router.get("/my-recipes", getAllMyRecipes);
router.post("/my-recipes", createMyRecipe);
// // Brew button updating addIngredient collection
// router.put("/brew", controller.brewRecipe);

export default router;
