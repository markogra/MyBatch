import React, { FC } from 'react';
import { MyRecipe } from "../types/MyRecipe";

interface MyRecipesList {
  myRecipes: MyRecipe[],
  onData: (data: MyRecipe) => void
}

const MyRecipeList: FC<MyRecipesList> = ({ myRecipes, onData }) => {

  return <div className="my-recipe-list">
    <h2>Your recipe list</h2>
    <ul className="my-recipes">
      {myRecipes &&
        myRecipes.map((recipe: MyRecipe) => (
          <li
            className="your-list-li"
            key={recipe._id}
            onClick={() => onData(recipe)}
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
}

export default MyRecipeList;