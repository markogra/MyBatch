import express, { Request,Response } from 'express';
import { getAllInventoryItems, createInventoryItem ,deleteInventoryItem } from './controllers/inventoryItemController';

const router = express.Router()

router.get("/", function (req:Request, res:Response) {
  res.send("MyBatch server is running");
});

router.get("/inventory", getAllInventoryItems);
router.post("/inventory", createInventoryItem);
router.delete("/inventory/:id", deleteInventoryItem);
// router.get("/our-recipes", controller.getOurRecipes);
// router.get("/my-recipes", controller.getMyRecipes);
// router.post("/my-recipes", controller.postMyRecipe);
// // Brew button updating addIngredient collection
// router.put("/brew", controller.brewRecipe);

export default router;
