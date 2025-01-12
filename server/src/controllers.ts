import { BeerRecipe, Ingredient, MyRecipe } from "./models/models"
import { Request, Response} from "express";

export const getAllIngredients = async (req:Request, res:Response) => {
  try {
    const response = await Ingredient.find();
    res.status(200).send(response);
  } catch (err) {
    res.send(err);
  }
};

// export const createIngredients = async (req:Request, res:Response) => {

//   const { name, amount, type } = req.body;

//   try {
//     const existingIngredient = await Ingredient.findOne({ name, type });
//     console.log(existingIngredient);
//     if (existingIngredient) {
//       // If there is one with the same name and type, update amount
//       console.log("Updating existing ingredient");
//       existingIngredient.amount += Number(amount);
//       console.log(amount);
//       await existingIngredient.save();
//       res.status(200).send(existingIngredient);
//     } else {
//       console.log("Creating new ingredient");
//       const ingredient = await addIngredient({
//         name,
//         amount,
//         type,
//       }).save();
//       res.status(201).send(ingredient);
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500);
//   }
// };

// export const deleteIngredient = async (req:Request, res:Response) => {
//   try {
//     const ingredientId = req.params.id;
//     const ingredient = await addIngredient.findById(ingredientId);
//     await ingredient.deleteOne({ _id: ingredientId });
//     console.log("Item deleted");
//     res
//       .status(200)
//       .json({ success: true, message: "Ingredient deleted successfully" });
//   } catch (error) {
//     console.log(error);
//     res
//       .status(500)
//       .json({ success: false, error: "Failed to delete ingredient" });
//   }
// };

// export const getOurRecipes = async (req:Request, res:Response) => {
//   try {
//     const response = await beerRecipe.find();

//     res.status(200).send(response);
//   } catch (error) {
//     console.log("ERROR!!!! " + error);
//   }
// };

// export const getMyRecipes = async (req:Request, res:Response) => {
//   try {
//     const response = await myRecipe.find();
//     console.log("Response on my recipes");
//     console.log(response);
//     res.status(200).send(response);
//   } catch (error) {
//     console.log("ERROR!!!! " + error);
//   }
// };

// export const postMyRecipe = async (req:Request, res:Response) => {
//   console.log(req.body.ingredients.hops);
//   try {
//     const { name, style, ingredients, instructions } = req.body;
//     const newRecipe = new myRecipe({
//       name,
//       style,
//       ingredients,
//       instructions,
//     });
//     const savedRecipe = await newRecipe.save();
//     res.status(201).json(savedRecipe);
//   } catch (error) {
//     console.log("ERROR!!! " + error);
//     res.status(500);
//   }
// };

// export const brewRecipe = async (req:Request, res:Response) => {
//   try {
//     console.log("Received on the BE");
//     const inventory = await addIngredient.find();
//     const { recipeId } = req.body;
//     console.log(recipeId);
//     const selectedRecipe = await beerRecipe.findById(recipeId);
//     if (!selectedRecipe) {
//       return res
//         .status(404)
//         .json({ success: false, error: "Recipe not found" });
//     }

//     const enoughIngredients = checkIfEnoughIngredients(
//       selectedRecipe.ingredients,
//       inventory
//     );
//     if (enoughIngredients) {
//       await reduceIngredients(selectedRecipe.ingredients, inventory);
//       res.status(200).json({ success: true, message: "Brew successful!" });
//     } else {
//       res.status(400).json({ success: false, error: "Not enough ingredients" });
//     }
//   } catch (error) {
//     console.error("Error in brewRecipe:", error);
//     res.status(500).json({ success: false, error: "Internal server error" });
//   }
// };

// // Helper function to check if there are enough ingredients
// function checkIfEnoughIngredients(recipeIngredients, inventory) {
//   const malts = recipeIngredients.malts || [];
//   const hops = recipeIngredients.hops || [];
//   const yeast = recipeIngredients.yeast || [];

//   const allIngredients = [...malts, ...hops, ...yeast];

//   console.log(`All ingredients ${allIngredients}`);

//   const allIngredientsAvailable = allIngredients.every((ing) => {
//     const matchingIngredient = inventory.find(
//       (invIng) => invIng.name === ing.name
//     );

//     if (matchingIngredient) {
//       const rightAmountNeeded =
//         ing.amount.slice(-2) === "kg"
//           ? parseInt(ing.amount) * 1000
//           : parseInt(ing.amount);

//       if (matchingIngredient.amount >= rightAmountNeeded) {
//         console.log(
//           `${matchingIngredient.name} ${matchingIngredient.amount} is more than ${ing.name} ${rightAmountNeeded} `
//         );
//         return true;
//       } else {
//         console.log(
//           `${matchingIngredient.name} ${matchingIngredient.amount} is less than ${ing.name} ${rightAmountNeeded}`
//         );
//         return false;
//       }
//     } else {
//       console.log(`Ingredient not found: ${ing.name}`);
//       return false;
//     }
//   });

//   if (allIngredientsAvailable) {
//     console.log("All ingredients available. Reducing inventory...");
//     reduceIngredients(recipeIngredients, inventory);
//   } else {
//     console.log("Not enough ingredients available.");
//   }
// }

// // Helper function that reduces ingredients
// async function reduceIngredients(recipeIngredients, inventory) {
//   const allIngredientsNeeded = [
//     ...recipeIngredients.malts,
//     ...recipeIngredients.hops,
//     ...recipeIngredients.yeast,
//   ];

//   console.log("All ingredients needed:", allIngredientsNeeded);

//   const updatePromises = [];

//   for (const needed of allIngredientsNeeded) {
//     const matchingIngredients = inventory.filter(
//       (invIng) => invIng.name === needed.name
//     );

//     const rightAmountNeeded =
//       needed.amount.slice(-2) === "kg"
//         ? parseInt(needed.amount) * 1000
//         : parseInt(needed.amount);

//     let remainingAmount = rightAmountNeeded;

//     for (const matchingIngredient of matchingIngredients) {
//       if (remainingAmount > 0) {
//         const amountToReduce = Math.min(
//           remainingAmount,
//           matchingIngredient.amount
//         );

//         const updatedAmount = matchingIngredient.amount - amountToReduce;

//         const updatePromise = addIngredient.updateOne(
//           { _id: matchingIngredient._id },
//           { $set: { amount: updatedAmount } }
//         );
//         updatePromises.push(updatePromise);

//         remainingAmount -= amountToReduce;
//         console.log(
//           `${needed.name} updated: ${updatedAmount} left in inventory`
//         );
//       }
//     }

//     if (remainingAmount > 0) {
//       console.error(
//         `${needed.name} not enough in inventory for ${rightAmountNeeded}`
//       );
//     }
//   }

//   await Promise.all(updatePromises);

//   console.log("Inventory reduced and updated in the database");
// }
