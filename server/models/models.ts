const mongoose = require('./db');
import { addIngredientSchema } from './ingredientsSchemas';
import { beerRecipeSchema, myRecipeSchema } from './recipeSchemas';

const Schema = mongoose.Schema;

const beerRecipe = mongoose.model("beerRecipe", beerRecipeSchema, "ourrecipes");

const addIngredient = mongoose.model("addIngredient", addIngredientSchema);

const myRecipe = mongoose.model("myRecipe", myRecipeSchema, "myrecipes");

export { beerRecipe, addIngredient, myRecipe };