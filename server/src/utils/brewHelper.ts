import { IInventoryItem } from "../models/inventoryItemModel";
import { IBeerRecipe } from "../models/beerRecipeModel";


export function checkIfEnoughIngredients(
  recipeIngredients: IBeerRecipe["ingredients"],
  inventory: IInventoryItem[]
): boolean {
  const allIngredients = [
    ...(recipeIngredients.malts || []),
    ...(recipeIngredients.hops || []),
    ...(recipeIngredients.yeast || []),
  ];

  return allIngredients.every((ingredient) => {
    const matchingIngredient = inventory.find((inv) => inv.name === ingredient.name);
    if (!matchingIngredient) return false;

    const requiredAmount =
      ingredient.unit === "kg" ? ingredient.amount * 1000 : ingredient.amount;

    return matchingIngredient.amount >= requiredAmount;
  });
}

// Helper function that reduces ingredients
export async function reduceIngredients(
  recipeIngredients: IBeerRecipe["ingredients"],
  inventory: IInventoryItem[],
  updateInventoryItem: (id: string, updatedAmount: number) => Promise<void>
): Promise<void> {
  const allIngredients = [
    ...(recipeIngredients.malts || []),
    ...(recipeIngredients.hops || []),
    ...(recipeIngredients.yeast || []),
  ];

  for (const ingredient of allIngredients) {
    let requiredAmount = ingredient.unit === "kg" ? ingredient.amount * 1000 : ingredient.amount;

    for (const inv of inventory.filter((inv) => inv.name === ingredient.name)) {
      if (requiredAmount <= 0) break;

      const amountToReduce = Math.min(requiredAmount, inv.amount);
      requiredAmount -= amountToReduce;

      await updateInventoryItem(inv._id, inv.amount - amountToReduce);
    }

    if (requiredAmount > 0) {
      throw new Error(`Not enough of ${ingredient.name} in inventory`);
    }
  }
}