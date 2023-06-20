import React, { useEffect, useState, FC } from "react";
import CreateRecipe from "../components/CreateRecipe";
import MyRecipeDetails from "../components/MyRecipeDetails";
import "./RecipesPages.css";
import { MyRecipe } from "../types/MyRecipe";
import { BeerRecipe } from "../types/BeerRecipe";
import MyRecipeList from "../components/MyRecipeList";

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

  const handleSelectionFromChild = (childData: MyRecipe) => {
    setSelectedRecipe(childData);
  }

  return (
    <div className="container">
      <div className="first-half">

        <CreateRecipe myRecipes={myRecipes} allRecipes={allRecipes} onData={handleRecipeFromChild} />

        <MyRecipeList myRecipes={allMyRecipes} onData={handleSelectionFromChild} />
      </div>
      <MyRecipeDetails selectedRecipe={selectedRecipe}/>
    </div>
  );
};

export default MyRecipesPage;
