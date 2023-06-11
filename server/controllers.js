const { beerRecipe, addIngredient } = require("./models/models");

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
  const { name, amount } = req.body;
  try {
    const ingredient = await addIngredient({
      name,
      amount,
    }).save();
    res.status(201).send(ingredient);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

exports.deleteIngredient = async (req, res) => {};

exports.getOurRecipes = async (req, res) => {
  try {
    const response = await beerRecipe.find();
    // console.log(
    //   "**************************Start of response*************************"
    // );
    // console.log(response);
    // console.log(
    //   "**************************End of response*************************"
    // );
    res.status = 200;
    res.send(response);
  } catch (error) {
    console.log("ERROR!!!! " + error);
  }
};
