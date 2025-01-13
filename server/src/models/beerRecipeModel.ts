import { Schema, model, Document } from "mongoose";


// Define TypeScript interfaces for each of the schemas

export interface IIngredientBeerRecipe extends Document {
  name:string;
  amount:string;
  time?:string;
}

export interface IBeerRecipe extends Document {
  name: string;
  style: string;
  description: string;
  batchSize: string;
  ingredients: {
    malts: IIngredientBeerRecipe[];
    hops: IIngredientBeerRecipe[];
    yeast: IIngredientBeerRecipe[];
  };
  instructions: string[];
}

const ingredientBeerRecipeSchema = new Schema<IIngredientBeerRecipe>({
  name: { type: String, required: true },
  amount: { type: String, required: true },
  time: { type: String, required: false }, 
});

const beerRecipeSchema = new Schema<IBeerRecipe>({
  name: { type: String, required: true },
  style: { type: String, required: true },
  description: { type: String, required: true },
  batchSize: { type: String, required: true },
  ingredients: {
    malts: [ingredientBeerRecipeSchema], 
    hops: [ingredientBeerRecipeSchema],   
    yeast: [ingredientBeerRecipeSchema],   
  },
  instructions: { type: [String], required: true },
});


const BeerRecipe = model<IBeerRecipe>("beerRecipe", beerRecipeSchema, "ourrecipes");

// Export the models
export default BeerRecipe