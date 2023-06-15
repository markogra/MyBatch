import { Malt } from "./Malt";
import { Hop } from "./Hop";

export interface BeerRecipe {
  _id: string;
  name: string;
  style: string;
  description: string;
  batchSize: string;
  ingredients: {
    malts: Malt[];
    hops: Hop[];
    yeast: string;
  };
  instructions: string[];
}
