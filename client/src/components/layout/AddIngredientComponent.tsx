import { useContext } from "react";
import styles from '../../pages/InventoryPage.module.css'
import IngredientItem from '../inventory/IngredientItem'
import AddIngredientForm from "../inventory/AddIngredientForm";
import { AddIngredientProps } from "../../types";

import { InventoryContext } from "../../contexts/InventoryContext";

export default function AddIngredientComponent({ingType}:AddIngredientProps) {

  const {allIngredients} = useContext(InventoryContext)

  const ingredientName = ingType[0].toUpperCase() + ingType.slice(1)

  return (
    <div className={styles["add-ing-component"]}>
      <div className={styles["ing-title"]}>
        <h2>{ingredientName}</h2>
        <img
          className={styles["ing-img"]}
          alt={ingType}
          src={`img/${ingType}.png`} 
          />
      </div>
      <div className={styles["ing-component-container"]}>
        <ul>
        {allIngredients?.filter((ingredient: any) => ingredient.type === ingType)
          .map((ingredient: any) => (
            <IngredientItem ingredient={ingredient} key={ingredient._id} />
          ))}
        </ul>
        <AddIngredientForm ingType={ingType} />
      </div>
    </div>
  );
}
