import React, { useState, FC } from "react";
import "./RecipesPages.css";
import { BeerRecipe } from "../types/BeerRecipe";
import { Ingredient } from "../types/Ingredient";

interface OurRecipesPageProps {
  allRecipes: BeerRecipe[];
}

const IngredientList: FC<{
  title: string;
  ingredients: Ingredient[];
}> = ({ title, ingredients }) => {
  return (
    <>
      <h3>{title}</h3>
      <ul className="ing-ul">
        {ingredients.map((ingredient) => (
          <li key={ingredient._id}>
            {ingredient.name} {ingredient.amount}{" "}
            {ingredient.time && `Adding time: ${ingredient.time}`}
          </li>
        ))}
      </ul>
    </>
  );
};

const InstructionList: FC<{ instructions: string[] }> = ({ instructions }) => {
  return (
    <>
      <h2>Recipe instructions</h2>
      <ul>
        {instructions.map((instruction) => (
          <li key={instruction}>{instruction}</li>
        ))}
      </ul>
    </>
  );
};

const OurRecipesPage: FC<OurRecipesPageProps> = ({ allRecipes }) => {
  const [selectedRecipe, setSelectedRecipe] = useState<BeerRecipe | null>(null);

  const handleRecipeClick = (recipe: BeerRecipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="our-recipes">
      <div className="recipe-list containers">
        <h2 style={{ fontFamily: "cursive" }}>
          Here are some of our most popular recipes
        </h2>
        <ul className="ourRecipes">
          {allRecipes.map((recipe) => (
            <li
              key={recipe._id}
              onClick={() => handleRecipeClick(recipe)}
              className={selectedRecipe === recipe ? "active-recipe" : ""}
            >
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="recipe-instruction containers">
        <h2>Details</h2>
        {selectedRecipe && (
          <div className="ing-details">
            <IngredientList
              title="Hops"
              ingredients={selectedRecipe.ingredients.hops as Ingredient[]}
            />
            <IngredientList
              title="Yeast"
              ingredients={[
                {
                  _id: "",
                  name: selectedRecipe.ingredients.yeast,
                  amount: "",
                },
              ]}
            />
            <IngredientList
              title="Malts"
              ingredients={selectedRecipe.ingredients.malts as Ingredient[]}
            />
            <InstructionList instructions={selectedRecipe.instructions} />
          </div>
        )}
      </div>
    </div>
  );
};

export default OurRecipesPage;
