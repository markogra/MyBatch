const { mongoose } = require("./db");

const Schema = mongoose.Schema;

const addIngredientSchema = new Schema({
  name: String,
  amount: String,
});

const maltSchema = new Schema({
  name: String,
  amount: String,
});

const hopSchema = new Schema({
  name: String,
  amount: String,
  time: String,
});

const beerRecipeSchema = new Schema({
  name: String,
  style: String,
  description: String,
  batchSize: String,
  ingredients: {
    malts: [maltSchema],
    hops: [hopSchema],
    yeast: String,
  },
  instructions: [String],
});

const beerRecipe = mongoose.model("beerRecipe", beerRecipeSchema, "ourrecipes");
const addIngredient = mongoose.model("addIngredient", addIngredientSchema);

module.exports = { beerRecipe, addIngredient };
