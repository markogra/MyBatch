const baseUrl = "http://localhost:3500/inventory";

export const getAllIngredients = async () => {
  try {
    const response = await fetch(baseUrl);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const createIngredients = (ingName, ingAmount, ingType) =>
  fetch(baseUrl, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: ingName,
      amount: ingAmount,
      type: ingType,
    }),
  });

export async function getOurRecipes() {
  try {
    const response = await fetch("http://localhost:3500/our-recipes");
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

export async function deleteIngredient(ingredientId) {
  fetch("http://localhost:3500/inventory/" + ingredientId, {
    method: "DELETE",
    mode: "cors",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export const getMyRecipes = async () => {
  try {
    const response = await fetch("http://localhost:3500/my-recipes");
    if (!response.ok) {
      throw new Error("Failed to fetch recipes");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export async function postMyRecipe(recipeData) {
  try {
    const response = await fetch("http://localhost:3500/my-recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeData),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
}
