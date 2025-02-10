import { useEffect, useState } from "react";
import "./myRecipe.css";
import CreateRecipeForm from "../components/CreateRecipeForm";
import YourRecipeList from "../components/YourRecipeList";
import YourRecipeDetails from "../components/YourRecipeDetails";

function MyRecipesPage({ myRecipes, allRecipes, allHops, allMalts, allYeast }) {
  const [allMyRecipes, setMyRecipes] = useState([myRecipes]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    setMyRecipes(myRecipes);
  }, [myRecipes]);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="container">
      <CreateRecipeForm
        handleRecipeClick={handleRecipeClick}
        setMyRecipes={setMyRecipes}
        allHops={allHops}
        allMalts={allMalts}
        allYeast={allYeast}
      />
      <YourRecipeList
        allMyRecipes={allMyRecipes}
        setSelectedRecipe={setSelectedRecipe}
      />
      <YourRecipeDetails selectedRecipe={selectedRecipe} />
    </div>
  );
}

export default MyRecipesPage;
