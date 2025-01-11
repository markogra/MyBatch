const router = require("express").Router();
const controller = require("./controllers");

router.get("/", function (req, res) {
  res.send("MyBatch server is running");
});

router.get("/inventory", controller.getAllIngredients);
router.post("/inventory", controller.createIngredients);
router.delete("/inventory/:id", controller.deleteIngredient);
router.get("/our-recipes", controller.getOurRecipes);
router.get("/my-recipes", controller.getMyRecipes);
router.post("/my-recipes", controller.postMyRecipe);
// Brew button updating addIngredient collection
router.put("/brew", controller.brewRecipe);

module.exports = router;
