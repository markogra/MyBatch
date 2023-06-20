import React, { useEffect, useState, FC } from "react";
import CreateRecipe from "../components/CreateRecipe";
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

        {<CreateRecipe myRecipes={myRecipes} allRecipes={allRecipes} onData={handleRecipeFromChild} />}

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
      <div className="my-recipe-details">
        <h1>Details</h1>
        {selectedRecipe && (
          <div>
            <h2>
              {selectedRecipe.name}({selectedRecipe.style})
            </h2>

            <h3>Ingredients:</h3>
            <ul>
              {selectedRecipe.ingredients.hops.map((hop, index) => (
                <li key={index}>
                  {hop.name}: {hop.amount}
                </li>
              ))}
              {selectedRecipe.ingredients.malts.map((malt, index) => (
                <li key={index}>
                  {malt.name}: {malt.amount}
                </li>
              ))}
              <li>
                Yeast: {selectedRecipe.ingredients.yeast[0].name},{" "}
                {selectedRecipe.ingredients.yeast[0].amount}
              </li>
            </ul>
            <h3>Instructions:</h3>
            <p>{selectedRecipe.instructions}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRecipesPage;
