const router = require("express").Router();
const controller = require("./controllers");
import { Request, Response } from 'express';

router.get("/hello", function (req: Request, res: Response) {
  res.send("Hellooooo Stranger, what's up?");
});

router.get("/", function (req: Request, res: Response) {
  res.send("MyBatch express is here");
});

router.get("/inventory", controller.getAllIngredients);
router.post("/inventory", controller.createIngredients);
router.delete("/inventory/:id", controller.deleteIngredient);
router.get("/our-recipes", controller.getOurRecipes);
router.get("/my-recipes", controller.getMyRecipes);
router.post("/my-recipes", controller.postMyRecipe);
router.post('/our-recipes', controller.postOurRecipe);
module.exports = router;
