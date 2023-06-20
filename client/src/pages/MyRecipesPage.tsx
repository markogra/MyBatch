import React, { useEffect, useState, FC } from "react";
import CreateRecipe from "../components/CreateRecipe";
import MyRecipeDetails from "../components/MyRecipeDetails";
import "./RecipesPages.css";
import { MyRecipe } from "../types/MyRecipe";
import { BeerRecipe } from "../types/BeerRecipe";

interface MyRecipesPageProps {
  myRecipes: MyRecipe[];
  allRecipes: BeerRecipe[];
}

const MyRecipesPage: FC<MyRecipesPageProps> = ({ myRecipes, allRecipes }) => {
  const [allMyRecipes, setMyRecipes] = useState(myRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState<MyRecipe | null>(null);

  useEffect(() => {
    setMyRecipes(myRecipes);
  }, [myRecipes]);

  const handleRecipeFromChild = (childData: MyRecipe) => {
    setMyRecipes((prevRecipes) => [...prevRecipes, childData]);
  }

  return (
    <div className="container">
      <div className="first-half">

        <CreateRecipe myRecipes={myRecipes} allRecipes={allRecipes} onData={handleRecipeFromChild} />

        <div className="my-recipe-list">
          <h2>Your recipe list</h2>
          <ul className="my-recipes">
            {allMyRecipes &&
              allMyRecipes.map((recipe) => (
                <li
                  className="your-list-li"
                  key={recipe._id}
                  onClick={() => setSelectedRecipe(recipe)}
                >
                  <span className="my-recipe-name">
                    {recipe.name}
                    <br />
                  </span>
                  <span className="my-recipe-style">{recipe.style}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <MyRecipeDetails selectedRecipe={selectedRecipe}/>
    </div>
  );
};

export default MyRecipesPage;
