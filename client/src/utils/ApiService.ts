const baseUrl = "http://localhost:3500";

export const getAllIngredients = async () => {
  try {
    const response = await fetch(`${baseUrl}/inventory`);
    return response.json();
  } catch (err) {
    const error = err as Error
    console.error(error.message)
  }
};

export const addNewIngredient = async (ingName:string, ingAmount:any, ingType:string, ingUnit:string) =>{

  try{
    const requestBody = {
      name:ingName,
      amount:ingAmount,
      type:ingType,
      unit:ingUnit
    }

    const response = await fetch(`${baseUrl}/inventory`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody)
    })

    if (!response.ok) {
      throw new Error(`Failed to add ingredient: ${response.status} ${response.statusText}`);
    }

    return await response.json();

  }catch(err){
    const error = err as Error
    console.error(error.message)
  }
}

export const deleteIngredient = async(ingredientId:any) => {
  try {
    const response = await  fetch(`${baseUrl}/inventory/${ingredientId}`, {
    method: "DELETE",
    mode: "cors",
  })

    return await response.json()

  } catch (err) {
      const error = err as Error
      console.error(error.message);
    }
}

export async function getOurRecipes() {
  try {
    const response = await fetch("http://localhost:3500/our-recipes");
    return response.json();
  } catch (err) {
    const error = err as Error
    console.error(error.message);
  }
}

// export const getMyRecipes = async () => {
//   try {
//     const response = await fetch("http://localhost:3500/my-recipes");
//     if (!response.ok) {
//       throw new Error("Failed to fetch recipes");
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// export async function postMyRecipe(recipeData) {
//   try {
//     const response = await fetch("http://localhost:3500/my-recipes", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(recipeData),
//     });
//     return response.json();
//   } catch (err) {
//     console.log(err);
//   }
// }

// export async function brewRecipe(recipeId) {
//   try {
//     console.log(recipeId);
//     console.log("Clicked on the FE");

//     const response = await fetch(`http://localhost:3500/brew`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ recipeId }),
//     });
//     return response.json();
//   } catch (error) {
//     console.log(error);
//   }
// }
