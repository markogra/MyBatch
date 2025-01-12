import { Schema, model, Document } from "mongoose";

// Define IInventory interface with validation
export interface IInventoryItem extends Document {
  name: string;
  amount: number;
  unit:string;
  time?:string;
  type: "malt" | "hop" | "yeast" | "extra";
}

// Create a schema with validation
const inventoryItemSchema = new Schema<IInventoryItem>({
  name: { type: String, required: true },
  amount: { type: Number, required: true, default: 0 },
  unit:{type:String, required:true, default:'grams'},
  type: { type: String, enum: ['malt', 'hop', 'yeast', 'extra'], required: true },
});


const InventoryItem = model<IInventoryItem>("Inventory", inventoryItemSchema);

export default InventoryItem;