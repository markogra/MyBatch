import { Ingredient } from './Ingredient';

export interface MyRecipe {
  name: string;
  style: string;
  ingredients: {
    hops: Ingredient[];
    malts: Ingredient[];
    yeast: Ingredient[];
  };
  instructions: string;
}
