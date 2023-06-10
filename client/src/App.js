import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import InventoryPage from "./pages/InventoryPage";
import OurRecipesPage from "./pages/OurRecipesPage";
import HowToBrew from "./pages/HowToBrewPage";
import MyRecipesPage from "./pages/MyRecipesPage";
import Homepage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route
          path="/inventory"
          element={<InventoryPage></InventoryPage>}
        ></Route>
        <Route
          path="/our-recipes"
          element={<OurRecipesPage></OurRecipesPage>}
        ></Route>
        <Route path="/how-to-brew" element={<HowToBrew></HowToBrew>}></Route>
        <Route
          path="/my-recipes"
          element={<MyRecipesPage></MyRecipesPage>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
