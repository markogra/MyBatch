import { useState, useEffect } from "react";
import {
  createIngredients,
  getAllIngredients,
  deleteIngredient,
} from "../utils/ApiService";
import AddIngredientForm from "./AddIngForm";
import { DeleteButton } from "./mui";
import hopsImage from "../img/hop.png";
import extraImage from "../img/extra.png";
import maltImage from "../img/barley.png";
import yeastImage from "../img/yeast.png";

export default function AddIngredientComponent({
  type,
  allMalts,
  allHops,
  allYeast,
}) {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");

  async function addIngredient() {
    try {
      if (name === "" || quantity === "" || unit === "") {
        alert("Please enter proper name, quantity and unit.");
        return;
      }
      if (!Number(quantity)) {
        alert("Please enter a proper number in Quantity field");
        resetForm();
        return;
      }
      const amountForDB = unit === "kilograms" ? quantity * 1000 : quantity;
      const newItem = await createIngredients(name, amountForDB, type);
      console.log(name, quantity, type, unit);
      refreshIngredients();
      resetForm();
    } catch (err) {
      console.error("Error:", err);
    }
  }

  function resetForm() {
    setName("");
    setQuantity("");
    setUnit("");
  }

  const refreshIngredients = async () => {
    try {
      const fetchedIngredients = await getAllIngredients();
      console.log(fetchedIngredients);
      setIngredients(
        fetchedIngredients.filter((ingredient) => ingredient.type === type)
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleDelete = async (ingredientId) => {
    try {
      await deleteIngredient(ingredientId);
      setIngredients((prevIngredients) =>
        prevIngredients.filter((ingredient) => ingredient._id !== ingredientId)
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    refreshIngredients();
  }, []);

  return (
    <div className="add-ing-component">
      <h2>{type}</h2>
      <img
        className="ing-img"
        alt="Hops"
        src={
          type === "hops"
            ? hopsImage
            : type === "malt"
            ? maltImage
            : type === "yeast"
            ? yeastImage
            : extraImage
        }
      />
      <div className="ing-component-container">
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient._id}>
              {ingredient.name}{" "}
              {ingredient.amount >= 1000
                ? `${ingredient.amount / 1000} kg`
                : `${ingredient.amount} g`}
              <DeleteButton onClick={() => handleDelete(ingredient._id)} />
            </li>
          ))}
        </ul>
        <AddIngredientForm
          name={name}
          setName={setName}
          quantity={quantity}
          setQuantity={setQuantity}
          addIngredient={addIngredient}
          type={type}
          allMalts={allMalts}
          allHops={allHops}
          allYeast={allYeast}
          unit={unit}
          setUnit={setUnit}
        />
      </div>
    </div>
  );
}
