const mongoose = require('./db');
import { ingredientsSchema } from './ingredientsSchemas';
import { ourRecipesSchema, myRecipeSchema } from './recipeSchemas';

const ourRecipes = mongoose.model("beerRecipe", ourRecipesSchema, "ourrecipes");

const Ingredients = mongoose.model("addIngredient", ingredientsSchema);

const myRecipe = mongoose.model("myRecipe", myRecipeSchema, "myrecipes");

export { ourRecipes, Ingredients, myRecipe };