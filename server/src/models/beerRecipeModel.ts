import { Schema, model, Document } from "mongoose";
import { IInventoryItem } from "./inventoryItemModel";


// Define TypeScript interfaces for each of the schemas

export interface IBeerRecipe extends Document {
  name: string;
  style: string;
  description: string;
  batchSize: string;
  ingredients: {
    malts: IInventoryItem[];
    hops: IInventoryItem[];
    yeast: IInventoryItem[];
  };
  instructions: string[];
}

const beerRecipeSchema = new Schema<IBeerRecipe>({
  name: { type: String, required: true },
  style: { type: String, required: true },
  description: { type: String, required: true },
  batchSize: { type: String, required: true },
  ingredients: {
    malts: [{ type: Schema.Types.ObjectId, ref: "InventoryItem" }],  // Use ObjectId and ref to refer to the Inventory model
    hops: [{ type: Schema.Types.ObjectId, ref: "InventoryItem" }],    // Same here for hops
    yeast: [{ type: Schema.Types.ObjectId, ref: "InventoryItem"}],   // Same for yeast
  },
  instructions: { type: [String], required: true },
});


const BeerRecipe = model<IBeerRecipe>("beerRecipe", beerRecipeSchema, "ourrecipes");

// Export the models
export default BeerRecipe