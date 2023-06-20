const mongoose = require('./db');
import { ingredientsSchema } from './ingredientsSchemas';
import { ourRecipesSchema, myRecipesSchema } from './recipeSchemas';

const ourRecipes = mongoose.model("beerRecipe", ourRecipesSchema, "ourrecipes");

const Ingredients = mongoose.model("addIngredient", ingredientsSchema);

const myRecipes = mongoose.model("myRecipe", myRecipesSchema, "myrecipes");

export { ourRecipes, Ingredients, myRecipes };