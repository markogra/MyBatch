import { ReactNode } from "react";

export interface Ingredient {
  _id:string
  name: string;
  amount: number;
  unit: string;
  type: string;
}

export interface IngredientDetail {
  name: string;
  amount: string;
  time?: string;
}

export interface RecipeIngredients {
  malts: IngredientDetail[];
  hops: IngredientDetail[];
  yeast: IngredientDetail[];
}

export interface Recipe {
  _id: string;
  name: string;
  style: string;
  description: string;
  batchSize: string;
  ingredients: RecipeIngredients;
  instructions: string[];
}

export interface InventoryContextType {
  allIngredients: Ingredient[];
  setAllIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>;
  allOurRecipes: Recipe[];
  loading: boolean;
  error: string | null;
  selectedRecipe:Recipe | null;
  setSelectedRecipe: React.Dispatch<React.SetStateAction<Recipe | null>>;
}

export interface InventoryProviderProps {
  children: ReactNode;
}

export type AddIngredientProps = {
  ingType: string;
};