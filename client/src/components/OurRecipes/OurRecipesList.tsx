import { useContext } from "react";
import styles from '../../pages/ourRecipes.module.css'
import { InventoryContext } from "../../contexts/InventoryContext";
import RecipeItem from "./OurRecipeItem";

export default function OurRecipesList() {
  const {allOurRecipes} = useContext(InventoryContext)
  return (
    <div className={`${styles["recipe-list"]} ${styles["containers"]}`}>
      <h2>Some of our most popular recipes</h2>
      <div className={styles["scrollable-list"]}>
        {allOurRecipes.length > 0 && (
          <ul className={styles["ourRecipes"]}>
            {allOurRecipes.map((recipe) => (
              <RecipeItem recipe={recipe} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
