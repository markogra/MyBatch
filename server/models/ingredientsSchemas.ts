const mongoose = require('./db');

const Schema = mongoose.Schema;

const addIngredientSchema = new Schema({
  name: String,
  amount: String,
  type: String,
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

export { addIngredientSchema, maltSchema, hopSchema };