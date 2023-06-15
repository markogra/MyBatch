import React, { useState, useEffect, FC } from "react";
import {
  createIngredients,
  getAllIngredients,
  deleteIngredient,
} from "../utils/ApiService";
import "./InventoryPage.css";
import { FaTrash } from "react-icons/fa";
import { BeerRecipe } from "../types/BeerRecipe";
import { Ingredient } from "../types/Ingredient";

interface InventoryPageProps {
  allRecipes: BeerRecipe[] | null;
}

const InventoryPage: FC<InventoryPageProps> = ({ allRecipes }) => {
  const ourRecipes = allRecipes;
  // Options for DropDown lists
  const allHops = new Set();
  const allMalts = new Set();
  const allYeast = new Set();

  useEffect(() => {
    console.log(allRecipes);
  }, [allRecipes]);

  if (ourRecipes) {
    ourRecipes.forEach((recipe) => {
      recipe.ingredients.hops.forEach((hop) => {
        allHops.add(hop.name);
      });
      recipe.ingredients.malts.forEach((malt) => {
        allMalts.add(malt.name);
      });
      allYeast.add(recipe.ingredients.yeast);
    });
  }

  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    refreshIngredients();
  }, []);

  const [hopsQuantity, setHopsQuantity] = useState("");
  const [maltsQuantity, setMaltsQuantity] = useState("");
  const [yeastQuantity, setYeastQuantity] = useState("");
  const [additionalQuantity, setAdditionalQuantity] = useState("");

  const resetFormInputs = () => {
    setHopsQuantity("");
    setMaltsQuantity("");
    setYeastQuantity("");
    setAdditionalQuantity("");
  };

  // functions to add ingredients(we are posting the topic to backend and update state)
  const addHops = async () => {
    const hopsSelectElement = document.querySelector(
      ".form-for-adding-hops select"
    ) as HTMLSelectElement;
    const hopsName = hopsSelectElement.value;
    if (hopsName === "" || hopsQuantity === "") {
      alert("Please enter proper name and quantity for hops");
      return;
    }

    try {
      const hopsInfo = await createIngredients(hopsName, hopsQuantity, "hops");
      console.log(hopsInfo);
      refreshIngredients();
      resetFormInputs();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const addMalts = async () => {
    const maltsSelectElement = document.querySelector(
      ".form-for-adding-malts select"
    ) as HTMLSelectElement;
    const maltsName = maltsSelectElement.value;
    if (maltsName === "" || maltsQuantity === "") {
      alert("Please enter proper name and quantity for malts");
      return;
    }

    try {
      const maltsInfo = await createIngredients(
        maltsName,
        maltsQuantity,
        "malts"
      );
      console.log(maltsInfo);
      refreshIngredients();
      resetFormInputs();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const addYeast = async () => {
    const yeastSelectElement = document.querySelector(
      ".form-for-adding-yeast select"
    ) as HTMLSelectElement;
    const yeastName = yeastSelectElement.value;
    if (yeastName === "" || yeastQuantity === "") {
      alert("Please enter proper name and quantity for yeast");
      return;
    }

    try {
      const yeastInfo = await createIngredients(
        yeastName,
        yeastQuantity,
        "yeast"
      );
      console.log(yeastInfo);
      refreshIngredients();
      resetFormInputs();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const addAdditionalIngredients = async () => {
    const ingredientSelectElement = document.querySelector(
      ".form-for-adding-additions select"
    ) as HTMLSelectElement;
    const additionalIngredientName = ingredientSelectElement.value;

    if (additionalIngredientName === "" || additionalQuantity === "") {
      alert("Please enter proper name and quantity for additional ingredients");
      return;
    }

    try {
      const additionalInfo = await createIngredients(
        additionalIngredientName,
        additionalQuantity,
        "additions"
      );
      console.log(additionalInfo);
      refreshIngredients();
      resetFormInputs();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = (ingredientId: string) => {
    deleteIngredient(ingredientId)
      .then((response) => {
        setIngredients((prevIngredients) =>
          prevIngredients.filter(
            (ingredient) => ingredient._id !== ingredientId
          )
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const refreshIngredients = () => {
    getAllIngredients()
      .then((fetchedIngredients) => {
        console.log(fetchedIngredients);
        setIngredients(fetchedIngredients);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="inventoryPage">
      <h1>Your Inventory</h1>
      <div className="row1">
        <div className="hops ingredients">
          <h2>Hops</h2>
          <div className="container-for-ul-and-form">
            <ul className="yourHops" key="hops-list">
              {ingredients.map((ingredient) =>
                ingredient.type === "hops" ? (
                  <li key={ingredient._id}>
                    {ingredient.name} {ingredient.amount}
                    <button
                      className="deleteButton"
                      onClick={() => handleDelete(ingredient._id)}
                    >
                      <FaTrash className="deleteIcon" />
                    </button>
                  </li>
                ) : null
              )}
            </ul>
            <div className="form-for-adding-hops forms">
              <select className="hops-dd" required>
                <option></option>
                {Array.from(allHops as Set<string>).map((hop) => (
                  <option key={hop} value={hop}>
                    {hop}
                  </option>
                ))}
              </select>
              <br />
              <input
                type="text"
                placeholder="Quantity in grams"
                value={hopsQuantity}
                onChange={(e) => {
                  setHopsQuantity(e.target.value);
                }}
              ></input>
              <br />
              <button onClick={addHops}>Add</button>
            </div>
          </div>
        </div>
        <div className="malts ingredients">
          <h2>Malts</h2>
          <div className="container-for-ul-and-form">
            <ul className="yourmalts">
              {ingredients.map((ingredient) =>
                ingredient.type === "malts" ? (
                  <li key={ingredient._id}>
                    {ingredient.name} {ingredient.amount}
                    <button
                      className="deleteButton"
                      onClick={() => handleDelete(ingredient._id)}
                    >
                      <FaTrash className="deleteIcon" />
                    </button>
                  </li>
                ) : null
              )}
            </ul>
            <div className="form-for-adding-malts forms">
              <select>
                <option></option>
                {Array.from(allMalts as Set<string>).map((malt) => (
                  <option key={malt} value={malt}>
                    {malt}
                  </option>
                ))}
              </select>
              <br />
              <input
                type="text"
                placeholder="Quantity in kg"
                value={maltsQuantity}
                onChange={(e) => {
                  setMaltsQuantity(e.target.value);
                }}
              ></input>
              <br />
              <button onClick={addMalts}>Add</button>
            </div>
          </div>
        </div>
      </div>
      {/* **************** */}
      <div className="row2">
        <div className="yeast ingredients">
          <h2>Yeast</h2>
          <div className="container-for-ul-and-form">
            <ul className="youryeast">
              {ingredients.map((ingredient) =>
                ingredient.type === "yeast" ? (
                  <li key={ingredient._id}>
                    {ingredient.name} {ingredient.amount}
                    <button
                      className="deleteButton"
                      onClick={() => handleDelete(ingredient._id)}
                    >
                      <FaTrash className="deleteIcon" />
                    </button>
                  </li>
                ) : null
              )}
            </ul>
            <div className="form-for-adding-yeast forms">
              <select>
                <option></option>
                {Array.from(allYeast as Set<string>).map((yeast) => (
                  <option key={yeast} value={yeast}>
                    {yeast}
                  </option>
                ))}
              </select>
              <br />
              <input
                type="text"
                placeholder="Quantity in grams"
                value={yeastQuantity}
                onChange={(e) => {
                  setYeastQuantity(e.target.value);
                }}
              ></input>
              <br />
              <button onClick={addYeast}>Add</button>
            </div>
          </div>
        </div>
        <div className="Additions ingredients">
          <h2>Additional Ingredients</h2>
          <div className="container-for-ul-and-form">
            <ul className="yourAdditions">
              {ingredients.map((ingredient) =>
                ingredient.type === "additions" ? (
                  <li key={ingredient._id}>
                    {ingredient.name} {ingredient.amount}
                    <button
                      className="deleteButton"
                      onClick={() => handleDelete(ingredient._id)}
                    >
                      <FaTrash className="deleteIcon" />
                    </button>
                  </li>
                ) : null
              )}
            </ul>
            <div className="form-for-adding-additions forms">
              <select>
                <option></option>
                <option value="Cinnamon Stick">Cinnamon Stick</option>
                <option value="Ginger Root">Ginger Root</option>
                <option value="Peach puree">Peach puree</option>
              </select>
              <br />
              <input
                type="text"
                placeholder="Quantity in grams"
                value={additionalQuantity}
                onChange={(e) => {
                  setAdditionalQuantity(e.target.value);
                }}
              ></input>
              <br />
              <button onClick={addAdditionalIngredients}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
