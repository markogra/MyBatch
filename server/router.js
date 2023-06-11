const router = require("express").Router();
const controller = require("./controllers");

router.get("/hello", function (req, res) {
  res.send("Hellooooo Stranger, what's up?");
});

router.get("/", function (req, res) {
  res.send("MyBatch express is here");
});

router.get("/inventory", controller.getAllIngredients);
router.post("/inventory", controller.createIngredients);
router.delete("/inventory/:id", controller.deleteIngredient);
router.get("/our-recipes", controller.getOurRecipes);

module.exports = router;
