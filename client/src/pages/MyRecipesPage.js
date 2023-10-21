import { useEffect, useState } from "react";
import "./myRecipe.css";
import { postMyRecipe } from "../utils/ApiService";
import CreateRecipeForm from "../components/CreateRecipeForm";
import YourRecipeList from "../components/YourRecipeList";
import YourRecipeDetails from "../components/YourRecipeDetails";

function MyRecipesPage({ myRecipes, allRecipes, allHops, allMalts, allYeast }) {
  const [allMyRecipes, setMyRecipes] = useState([myRecipes]);
  const [recipeName, setRecipeName] = useState("");
  const [beerStyle, setBeerStyle] = useState("");

  // const [instructions, setInstructions] = useState("");
  // const [hopsName, setHopsName] = useState("");
  // const [hopsQuantity, setHopsQuantity] = useState("");
  // const [maltsName, setMaltsName] = useState("");
  // const [maltsQuantity, setMaltsQuantity] = useState("");
  // const [yeastName, setYeastName] = useState("");
  // const [yeastQuantity, setYeastQuantity] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    setMyRecipes(myRecipes);
  }, [myRecipes]);
  console.log(allMyRecipes);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const recipeData = {
  //     name: recipeName,
  //     style: beerStyle,
  //     instructions: instructions,
  //     ingredients: {
  //       hops: [{ name: hopsName, amount: hopsQuantity }],
  //       malts: [{ name: maltsName, amount: maltsQuantity }],
  //       yeast: [{ name: yeastName, amount: yeastQuantity }],
  //     },
  //   };
  //   try {
  //     const savedRecipe = await postMyRecipe(recipeData);
  //     console.log(savedRecipe);
  //     setMyRecipes((prevRecipes) => [...prevRecipes, savedRecipe]);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="container">
      <CreateRecipeForm
        handleRecipeClick={handleRecipeClick}
        // handleSubmit={handleSubmit}
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
