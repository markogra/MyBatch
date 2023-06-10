const baseUrl = "http://localhost:3500/inventory";

export const getAllIngredients = async () => {
  try {
    const response = await fetch(baseUrl);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const createIngredients = (data) =>
  fetch(baseUrl, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

export async function getOurRecipes() {
  const response = await fetch("http://localhost:3500/our-recipes");
  const json = response.json();
  return json;
}
