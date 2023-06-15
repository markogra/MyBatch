import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import InventoryPage from "./pages/InventoryPage";
import OurRecipesPage from "./pages/OurRecipesPage";
// import HowToBrew from './pages/HowToBrewPage';
import MyRecipesPage from "./pages/MyRecipesPage";
import Homepage from "./pages/HomePage";
import { getOurRecipes, getMyRecipes } from "./utils/ApiService";
import { useState, useEffect, FC } from "react";
import { BeerRecipe } from "./types/BeerRecipe";
import { MyRecipe } from "./types/MyRecipe";

const App: FC = () => {
  const [allRecipes, setAllRecipes] = useState<BeerRecipe[]>([]);
  const [myRecipes, setMyRecipes] = useState<MyRecipe[]>([]);
  useEffect(() => {
    getOurRecipes().then((fetchedRecipes: BeerRecipe[]) => {
      setAllRecipes(fetchedRecipes);
    });
    getMyRecipes().then((fetchedMyRecipes: MyRecipe[]) => {
      setMyRecipes(fetchedMyRecipes);
    });
  }, []);

  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route
          path="/inventory"
          element={<InventoryPage allRecipes={allRecipes}></InventoryPage>}
        ></Route>
        <Route
          path="/our-recipes"
          element={<OurRecipesPage allRecipes={allRecipes}></OurRecipesPage>}
        ></Route>
        <Route
          path="/my-recipes"
          element={
            <MyRecipesPage
              allRecipes={allRecipes}
              myRecipes={myRecipes}
            ></MyRecipesPage>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
