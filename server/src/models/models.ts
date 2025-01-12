import { Schema, model, Document } from "mongoose";

// Define TypeScript interfaces for each of the schemas

interface IIngredient extends Document {
  name: string;
  amount: number;
  type: string;
}

interface IMalt extends Document {
  name: string;
  amount: string;
}

interface IYeast extends Document {
  name: string;
  amount: string;
}

interface IHop extends Document {
  name: string;
  amount: string;
  time: string;
}

interface IBeerRecipe extends Document {
  name: string;
  style: string;
  description: string;
  batchSize: string;
  ingredients: {
    malts: IMalt[];
    hops: IHop[];
    yeast: IYeast[];
  };
  instructions: string[];
}

interface IMyRecipe extends Document {
  name: string;
  style: string;
  ingredients: {
    hops: { name: string; amount: number; unit: string }[];
    malts: { name: string; amount: number; unit: string }[];
    yeast: { name: string; amount: number; unit: string }[];
  };
  instructions: string;
}

// Define Mongoose schemas with their corresponding interfaces

const ingredientSchema = new Schema<IIngredient>({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  type: { type: String, required: true },
});

const maltSchema = new Schema<IMalt>({
  name: { type: String, required: true },
  amount: { type: String, required: true },
});

const yeastSchema = new Schema<IYeast>({
  name: { type: String, required: true },
  amount: { type: String, required: true },
});

const hopSchema = new Schema<IHop>({
  name: { type: String, required: true },
  amount: { type: String, required: true },
  time: { type: String, required: true },
});

const beerRecipeSchema = new Schema<IBeerRecipe>({
  name: { type: String, required: true },
  style: { type: String, required: true },
  description: { type: String, required: true },
  batchSize: { type: String, required: true },
  ingredients: {
    malts: [maltSchema],
    hops: [hopSchema],
    yeast: [yeastSchema],
  },
  instructions: { type: [String], required: true },
});

const myRecipeSchema = new Schema<IMyRecipe>({
  name: { type: String, required: true },
  style: { type: String, required: true },
  ingredients: {
    hops: [{ name: String, amount: Number, unit: String }],
    malts: [{ name: String, amount: Number, unit: String }],
    yeast: [{ name: String, amount: Number, unit: String }],
  },
  instructions: { type: String, required: true },
});

// Create models using the schemas and interfaces
const BeerRecipe = model<IBeerRecipe>("beerRecipe", beerRecipeSchema, "ourrecipes");
const Ingredient = model<IIngredient>("ingredient", ingredientSchema);
const MyRecipe = model<IMyRecipe>("myRecipe", myRecipeSchema, "myrecipes");

// Export the models
export { BeerRecipe, Ingredient, MyRecipe };