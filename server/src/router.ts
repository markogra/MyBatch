import express, { Request,Response } from 'express';
import {getAllIngredients} from './controllers'

const router = express.Router()

router.get("/", function (req:Request, res:Response) {
  res.send("MyBatch server is running");
});

router.get("/inventory", getAllIngredients);
// router.post("/inventory", controller.createIngredients);
// router.delete("/inventory/:id", controller.deleteIngredient);
// router.get("/our-recipes", controller.getOurRecipes);
// router.get("/my-recipes", controller.getMyRecipes);
// router.post("/my-recipes", controller.postMyRecipe);
// // Brew button updating addIngredient collection
// router.put("/brew", controller.brewRecipe);

export default router;
