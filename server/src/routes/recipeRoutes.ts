import express, { Request,Response } from 'express';
import { getAllInventoryItems, createInventoryItem ,deleteInventoryItem } from '../controllers/inventoryItemController';
import { getAllBeerRecipes, brewRecipe } from '../controllers/beerRecipeController';
import { getAllMyRecipes, createMyRecipe } from '../controllers/myRecipeController';
import { protectRoute } from '../controllers/authContoller';

const router = express.Router()

router.get("/", function (req:Request, res:Response) {
  res.send("MyBatch server is running");
});

router.get("/our-recipes", getAllBeerRecipes);

router.use(protectRoute)

router.get("/inventory", getAllInventoryItems);
router.post("/inventory", createInventoryItem);
router.delete("/inventory/:id", deleteInventoryItem);
router.get("/my-recipes", getAllMyRecipes);
router.post("/my-recipes", createMyRecipe);
router.patch("/brew", brewRecipe);

export default router;
