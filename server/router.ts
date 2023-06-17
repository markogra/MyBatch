import { getAllIngredients } from './controllers/getAllIngredients';
import { createIngredients } from './controllers/createIngredients';
import { deleteIngredient } from './controllers/deleteIngredient';
import { getOurRecipes } from './controllers/getOurRecipes';
import { getMyRecipes } from './controllers/getMyRecipes';
import { postMyRecipe } from './controllers/postMyRecipe';
import { postOurRecipe } from './controllers/postOurRecipe';
import express, { Request, Response } from 'express';

const router = express.Router();

router.get("/hello", function (req: Request, res: Response) {
  res.send("Hellooooo Stranger, what's up?");
});

router.get("/", function (req: Request, res: Response) {
  res.send("MyBatch express is here");
});

router.get("/inventory", getAllIngredients);
router.post("/inventory", createIngredients);
router.delete("/inventory/:id", deleteIngredient);
router.get("/our-recipes", getOurRecipes);
router.get("/my-recipes", getMyRecipes);
router.post("/my-recipes", postMyRecipe);
router.post('/our-recipes', postOurRecipe);

export { router };