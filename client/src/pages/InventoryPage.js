import "./InventoryPage.css";
import AddIngredientComponent from "../components/AddIngComponent";

function InventoryPage({ allRecipes }) {
  const extractIngredientNames = (recipes, type) => {
    const allNames = new Set();

    recipes?.forEach((recipe) => {
      const ingredientsOfType = recipe.ingredients[type];

      if (ingredientsOfType) {
        if (Array.isArray(ingredientsOfType)) {
          ingredientsOfType.forEach((ingredient) => {
            allNames.add(ingredient.name);
          });
        } else {
          // This line is handling yeast
          allNames.add(ingredientsOfType);
        }
      }
    });

    return Array.from(allNames);
  };

  const allYeast = extractIngredientNames(allRecipes, "yeast");
  const allMalts = extractIngredientNames(allRecipes, "malts");
  const allHops = extractIngredientNames(allRecipes, "hops");
  return (
    <div>
      <h1>Inventory</h1>
      <div className="inventory-container">
        <AddIngredientComponent type="malt" allMalts={allMalts} />
        <AddIngredientComponent type="hops" allHops={allHops} />
        <AddIngredientComponent type="yeast" allYeast={allYeast} />
        <AddIngredientComponent type="additions" />
      </div>
    </div>
  );
}

export default InventoryPage;
