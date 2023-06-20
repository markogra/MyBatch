import React, { FC } from "react";
import { MyRecipe } from "../types/MyRecipe";

interface MyRecipeDetailsType {
  selectedRecipe: MyRecipe | null
}

const MyRecipeDetails:FC<MyRecipeDetailsType> = ({ selectedRecipe }) => {
  return <div className="my-recipe-details">
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
}

export default MyRecipeDetails;