import { useState, useEffect } from "react";
import {
  createIngredients,
  getAllIngredients,
  deleteIngredient,
} from "../utils/ApiService";
import AddIngredientForm from "./AddIngForm";
import { DeleteButton } from "./mui";

export default function AddIngredientComponent({
  type,
  allMalts,
  allHops,
  allYeast,
}) {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  async function addIngredient() {
    try {
      if (name === "" || quantity === "") {
        alert("Please enter proper name and quantity");
        return;
      }
      const newItem = await createIngredients(name, quantity, type);
      refreshIngredients();
      resetForm();
    } catch (err) {
      console.error("Error:", err);
    }
  }

  function resetForm() {
    setName("");
    setQuantity("");
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
      <div className="ing-component-container">
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient._id}>
              {ingredient.name} {ingredient.amount}
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
        />
      </div>
    </div>
  );
}
