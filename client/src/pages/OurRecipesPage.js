import { getOurRecipes } from "../utils/ApiService";
import { useState, useEffect } from "react";
import "./RecipesPages.css";

function OurRecipesPage({ allRecipes }) {
  const ourRecipes = allRecipes;

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="our-recipes ">
      <div className="recipe-list contaners">
        <h2>Here are some one our most popular recipes</h2>
        {ourRecipes && (
          <ul className="ourRecipes">
            {allRecipes.map((recipe) => (
              <li key={recipe._id} onClick={() => handleRecipeClick(recipe)}>
                <h3>{recipe.name}</h3>
                <p>{recipe.description}</p>
              </li>
            ))}
          </ul>
        )}
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
