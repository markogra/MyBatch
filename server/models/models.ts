const mongoose = require('./db');
import { ingredientsSchema } from './ingredientsSchemas';
import { beerRecipeSchema, myRecipeSchema } from './recipeSchemas';

const beerRecipe = mongoose.model("beerRecipe", beerRecipeSchema, "ourrecipes");

const Ingredients = mongoose.model("addIngredient", ingredientsSchema);

const myRecipe = mongoose.model("myRecipe", myRecipeSchema, "myrecipes");

export { beerRecipe, Ingredients, myRecipe };