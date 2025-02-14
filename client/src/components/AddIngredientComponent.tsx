import { useState, useEffect, useContext } from "react";
import styles from '../pages/InventoryPage.module.css'
import IngredientItem from './IngredientItem'

// import {
//   // createIngredients,
//   // getAllIngredients,
//   // deleteIngredient,
// } from "../utils/ApiService";
import AddIngredientForm from "./AddIngredientForm";



import { InventoryContext } from "../contexts/InventoryContext";

type AddIngredientProps = {
  ingType: string;
};

export default function AddIngredientComponent({ingType}:AddIngredientProps) {

  const {allIngredients} = useContext(InventoryContext)

  const ingredientName = ingType[0].toUpperCase() + ingType.slice(1)

  // const [ingredients, setIngredients] = useState([]);
  // const [name, setName] = useState("");
  // const [quantity, setQuantity] = useState("");
  // const [unit, setUnit] = useState("");

  // async function addIngredient() {
  //   try {
  //     if (name === "" || quantity === "" || unit === "") {
  //       alert("Please enter proper name, quantity and unit.");
  //       return;
  //     }
  //     if (!Number(quantity)) {
  //       alert("Please enter a proper number in Quantity field");
  //       resetForm();
  //       return;
  //     }
  //     const amountForDB = unit === "kilograms" ? quantity * 1000 : quantity;
  //     const newItem = await createIngredients(name, amountForDB, type);
  //     console.log(name, quantity, type, unit);
  //     refreshIngredients();
  //     resetForm();
  //   } catch (err) {
  //     console.error("Error:", err);
  //   }
  // }

  // function resetForm() {
  //   setName("");
  //   setQuantity("");
  //   setUnit("");
  // }

  // const refreshIngredients = async () => {
  //   try {
  //     const fetchedIngredients = await getAllIngredients();
  //     setIngredients(
  //       fetchedIngredients.filter((ingredient) => ingredient.type === type)
  //     );
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
  // const handleDelete = async (ingredientId) => {
  //   try {
  //     await deleteIngredient(ingredientId);
  //     setIngredients((prevIngredients) =>
  //       prevIngredients.filter((ingredient) => ingredient._id !== ingredientId)
  //     );
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  // useEffect(() => {
  //   refreshIngredients();
  // }, []);

  return (
    <div className={styles["add-ing-component"]}>
      <h2>{ingredientName}</h2>
      <img
        className={styles["ing-img"]}
        alt={ingType}
        src={`img/${ingType}.png`} 
      />
      <div className={styles["ing-component-container"]}>
        <ul>
          {allIngredients.data?.map((ingredient:any) => (
           <IngredientItem ingredient={ingredient} key={ingredient.id} />
          ))}
        </ul>
        <AddIngredientForm />
      </div>
    </div>
  );
}
