import { getOurRecipes } from "../utils/ApiService";
import { useState, useEffect } from "react";
import "./RecipesPages.css";

function OurRecipesPage() {
  let allHops = new Set();
  let allMalts = new Set();
  let allYeast = new Set();

  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  useEffect(() => {
    getOurRecipes().then((fetchedRecipes) => {
      console.log(fetchedRecipes);
      setRecipes(fetchedRecipes);
      fetchedRecipes.forEach((recipe) => {
        recipe.ingredients.hops.forEach((hop) => {
          allHops.add(hop.name);
        });
        recipe.ingredients.malts.forEach((malt) => {
          allMalts.add(malt.name);
        });
        allYeast.add(recipe.ingredients.yeast);
      });
      console.log(allHops);
      console.log(allMalts);
      console.log(allYeast);
    });
  }, []);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="our-recipes ">
      <div className="recipe-list contaners">
        <h2>Here are some one our most popular recipes</h2>
        <ul className="ourRecipes">
          {recipes.map((recipe) => (
            <li key={recipe._id} onClick={() => handleRecipeClick(recipe)}>
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="recipe-instruction contaners">
        <h2>Ingredients</h2>
        <h3>Hops</h3>
        {selectedRecipe && (
          <ul>
            {selectedRecipe.ingredients.hops.map((hop) => (
              <li key={hop._id}>
                {hop.name} {hop.amount} Adding time: {hop.time}
              </li>
            ))}
          </ul>
        )}
        <h3>Yeast</h3>
        {selectedRecipe && (
          <ul>
            <li>{selectedRecipe.ingredients.yeast}</li>
          </ul>
        )}
        <h3>Malts</h3>
        {selectedRecipe && (
          <ul>
            {selectedRecipe.ingredients.malts.map((malt) => (
              <li key={malt._id}>
                {malt.name} {malt.amount}
              </li>
            ))}
          </ul>
        )}
        <h2>Recipe instructions</h2>
        {selectedRecipe && (
          <ul>
            {selectedRecipe.instructions.map((instruction) => (
              <li>{instruction}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default OurRecipesPage;
