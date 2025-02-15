import { DeleteButton } from "./mui";
import styles from '../pages/InventoryPage.module.css'

export default function IngredientItem({ingredient}:any) {
  return (
    <li key={ingredient._id}>
      {ingredient.name}{" "}
      {ingredient.amount >= 1000
        ? `${ingredient.amount / 1000} kg`
        : `${ingredient.amount} g`}
      <DeleteButton onClick={() => 
        // handleDelete(ingredient._id)
        console.log('Item deleted !')
      } 
        />
  </li>
  )
}