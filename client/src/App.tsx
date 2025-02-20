import "./App.css";

import { useState, useEffect } from "react"
import { InventoryProvider } from "./contexts/InventoryContext";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import InventoryPage from "./pages/InventoryPage";
// import OurRecipesPage from "./pages/OurRecipesPage";
// import HowToBrew from "./pages/HowToBrewPage";
// import MyRecipesPage from "./pages/MyRecipesPage";
import Homepage from "./pages/HomePage";
// import { getOurRecipes } from "./utils/ApiService";
;

function App() {
  // const [allRecipes, setAllRecipes] = useState(null);
  // const [myRecipes, setMyRecipies] = useState([]);

  // const extractIngredientNames = (recipes, type) => {
  //   const allNames = new Set();

  //   recipes?.forEach((recipe) => {
  //     const ingredientsOfType = recipe.ingredients[type];

  //     if (ingredientsOfType) {
  //       if (Array.isArray(ingredientsOfType)) {
  //         ingredientsOfType.forEach((ingredient) => {
  //           allNames.add(ingredient.name);
  //         });
  //       } else {
  //         // This line is handling yeast
  //         allNames.add(ingredientsOfType);
  //       }
  //     }
  //   });

  //   return Array.from(allNames);
  // };

  // const allYeast = extractIngredientNames(allRecipes, "yeast");
  // const allMalts = extractIngredientNames(allRecipes, "malts");
  // const allHops = extractIngredientNames(allRecipes, "hops");
  // useEffect(() => {
  //   getOurRecipes().then((fetchedRecipes) => {
  //     setAllRecipes(fetchedRecipes);
  //   });
  //   getMyRecipes().then((fetchedMyRecipes) => {
  //     setMyRecipies(fetchedMyRecipes);
  //   });
  // }, []);

  return (
    <div className="App">
      <NavBar></NavBar>
      <InventoryProvider>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>

          <Route
            path="/inventory"
            element={
              <InventoryPage />
            }
            ></Route>
          
        {/* <Route
          path="/our-recipes"
          element={<OurRecipesPage allRecipes={allRecipes}></OurRecipesPage>}
        ></Route>
        <Route
          path="/my-recipes"
          element={
            <MyRecipesPage
              allHops={allHops}
              allMalts={allMalts}
              allYeast={allYeast}
              allRecipes={allRecipes}
              myRecipes={myRecipes}
            ></MyRecipesPage>
          }
        ></Route> */}
      </Routes>
      </InventoryProvider>
    </div>
  );
}

export default App;
