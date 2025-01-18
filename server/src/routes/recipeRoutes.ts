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


router.get("/inventory",protectRoute, getAllInventoryItems);
router.post("/inventory",protectRoute, createInventoryItem);
router.delete("/inventory/:id",protectRoute, deleteInventoryItem);
router.get("/my-recipes",protectRoute, getAllMyRecipes);
router.post("/my-recipes",protectRoute, createMyRecipe);
router.patch("/brew",protectRoute, brewRecipe);

export default router;
