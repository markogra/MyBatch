const mongoose = require('./db');
import { maltSchema, hopSchema, ingredientsSchema } from './ingredientsSchemas';

const Schema = mongoose.Schema;

const ourRecipesSchema = new Schema({
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

const myRecipesSchema = new Schema({
  name: String,
  style: String,
  ingredients: {
    hops: [ingredientsSchema],
    malts: [ingredientsSchema],
    yeast: [ingredientsSchema],
  },
  instructions: String,
});

export { ourRecipesSchema, myRecipesSchema };