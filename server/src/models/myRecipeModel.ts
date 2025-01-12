import { Schema, model, Document } from "mongoose";
import { IInventoryItem } from "./inventoryItemModel";

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

const MyRecipe = model<IMyRecipe>("myRecipe", myRecipeSchema, "myrecipes");

export default MyRecipe;