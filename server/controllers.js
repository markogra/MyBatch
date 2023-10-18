const { beerRecipe, addIngredient, myRecipe } = require("./models/models");

exports.getAllIngredients = async (req, res) => {
  try {
    const response = await addIngredient.find();
    console.log(response);
    res.status = 200;
    res.send(response);
  } catch (err) {
    res.send(err);
  }
};

exports.createIngredients = async (req, res) => {
  console.log(req.body);
  const { name, amount, type } = req.body;
  try {
    const existingIngredient = await addIngredient.findOne({ name, type });
    console.log(existingIngredient);
    if (existingIngredient) {
      // If there is one with the same name and type, update amount
      console.log("Updating existing ingredient");
      existingIngredient.amount += Number(amount);
      console.log(amount);
      await existingIngredient.save();
      res.status(200).send(existingIngredient);
    } else {
      console.log("Creating new ingredient");
      const ingredient = await addIngredient({
        name,
        amount,
        type,
      }).save();
      res.status(201).send(ingredient);
    }
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

exports.deleteIngredient = async (req, res) => {
  try {
    const ingredientId = req.params.id;
    const ingredient = await addIngredient.findById(ingredientId);
    await ingredient.deleteOne({ _id: ingredientId });
    console.log("Item deleted");
    res
      .status(200)
      .json({ success: true, message: "Ingredient deleted successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, error: "Failed to delete ingredient" });
  }
};

exports.getOurRecipes = async (req, res) => {
  try {
    const response = await beerRecipe.find();

    res.status = 200;
    res.send(response);
  } catch (error) {
    console.log("ERROR!!!! " + error);
  }
};

exports.getMyRecipes = async (req, res) => {
  try {
    const response = await myRecipe.find();
    console.log("Response on my recipes");
    console.log(response);
    res.status(200).send(response);
  } catch (error) {
    console.log("ERROR!!!! " + error);
  }
};

exports.postMyRecipe = async (req, res) => {
  console.log(req.body);
  try {
    const { name, style, ingredients, instructions } = req.body;
    const newRecipe = new myRecipe({
      name,
      style,
      ingredients,
      instructions,
    });
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    console.log("ERROR!!! " + error);
    res.status(500);
  }
};
