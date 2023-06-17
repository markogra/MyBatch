const mongoose = require('./db');
import { maltSchema, hopSchema, addIngredientSchema } from './ingredientsSchemas';

const Schema = mongoose.Schema;

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

const myRecipeSchema = new Schema({
  name: String,
  style: String,
  ingredients: {
    hops: [addIngredientSchema],
    malts: [addIngredientSchema],
    yeast: [addIngredientSchema],
  },
  instructions: String,
});

export { beerRecipeSchema, myRecipeSchema };