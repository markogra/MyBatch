import { DeleteButton } from "./mui";
import {deleteIngredient} from '../utils/ApiService'
import { useContext } from "react";
import { InventoryContext } from "../contexts/InventoryContext";


export default function IngredientItem({ingredient}:any) {

  const {setAllIngredients} = useContext(InventoryContext)

  async function handleDelete(){
    try {
      await deleteIngredient(ingredient._id);
      setAllIngredients((prevIng) => 
        prevIng.filter((ing) => ing._id !== ingredient._id)
      );
    } catch (error) {
      console.error("Failed to delete ingredient:", error);
    }
  }

  return (
    <li key={ingredient._id}>
      {ingredient.name}{" "}
      {ingredient.amount >= 1000
        ? `${ingredient.amount / 1000} kg`
        : `${ingredient.amount} g`}
      <DeleteButton onClick={handleDelete}
        />
  </li>
  )
}