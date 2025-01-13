import { IInventoryItem } from "../models/inventoryItemModel";
import { IBeerRecipe } from "../models/beerRecipeModel";


export function checkIfEnoughIngredients(
  recipeIngredients: IBeerRecipe['ingredients'],
  inventory: IInventoryItem[]
): boolean {
  const allIngredientsNeededForRecipe = [
    ...(recipeIngredients.malts || []),
    ...(recipeIngredients.hops || []),
    ...(recipeIngredients.yeast || []),
  ];

  console.log(allIngredientsNeededForRecipe)

  return allIngredientsNeededForRecipe.every((ingredient) => {
    const matchingIngredient = inventory.find((inv) => inv.name === ingredient.name);
    if (!matchingIngredient) return false;

    const requiredAmount =
      ingredient.amount.slice(-2) === "kg" ? Number(ingredient.amount.slice(0,-3)) * 1000 : Number(ingredient.amount.slice(0,-3));

    return matchingIngredient.amount >= requiredAmount;
  });
}

// Helper function that reduces ingredients
export async function reduceIngredients(
  recipeIngredients: IBeerRecipe["ingredients"],
  inventory: IInventoryItem[],
  updateInventoryItem: (id: string, updatedAmount: number) => Promise<void>
): Promise<void> {
  const ingredientsRequired = [
    ...(recipeIngredients.malts || []),
    ...(recipeIngredients.hops || []),
    ...(recipeIngredients.yeast || []),
  ];

  const aggregatedIngredients: Record<string, number> = {};

  ingredientsRequired.forEach((ingredient) => {
    const amount = parseFloat(ingredient.amount.slice(0, -3));  // Get amount without "gr" or "kg"
    const unit = ingredient.amount.slice(-2); 

    const amountInGrams = unit === "kg" ? amount * 1000 : amount;

    if (aggregatedIngredients[ingredient.name]) {
      aggregatedIngredients[ingredient.name] += amountInGrams;
    } else {
      aggregatedIngredients[ingredient.name] = amountInGrams;
    }
  });

  for (const [ingredientName, requiredAmount] of Object.entries(aggregatedIngredients)) {
    let remainingAmountToReduce = requiredAmount;

    const matchingInventoryItems = inventory.filter((inv) => inv.name === ingredientName);

    for (const inv of matchingInventoryItems) {
      if (remainingAmountToReduce <= 0) break; 

      const amountToReduce = Math.min(remainingAmountToReduce, inv.amount); 
      remainingAmountToReduce -= amountToReduce; 

      await updateInventoryItem(inv._id, inv.amount - amountToReduce);
    }

    if (remainingAmountToReduce > 0) {
      throw new Error(`Not enough of ${ingredientName} in inventory. ${remainingAmountToReduce} grams are still needed.`);
    }
  }
}