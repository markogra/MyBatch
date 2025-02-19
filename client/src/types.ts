import { ReactNode } from "react";

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
  type: string;
}

export interface Recipe {
  name: string;
  style: string;
  description: string;
  batchSize: string;
  ingredients: object;
  instructions: string[];
}

export interface InventoryContextType {
  allIngredients: Ingredient[];
  setAllIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>;
  allOurRecipes: Recipe[];
  loading: boolean;
  error: string | null;
}

export interface InventoryProviderProps {
  children: ReactNode;
}