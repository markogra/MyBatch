export interface InputRecipe {
  name: string;
  style: string;
  instructions: string;
  ingredients: {
    hops: [{ name: string; amount: string }];
    malts: [{ name: string; amount: string }];
    yeast: [{ name: string; amount: string }];
  };
}
