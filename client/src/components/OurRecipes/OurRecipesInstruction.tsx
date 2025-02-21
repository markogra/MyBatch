// import BrewButton from "./BrewButton";
import styles from "../../pages/ourRecipes.module.css"
import { useContext } from "react";
import { InventoryContext } from "../../contexts/InventoryContext";


export default function OurRecipesInstruction() {

  const {selectedRecipe} = useContext(InventoryContext)

  return (
    <div className={`${styles["recipe-instruction"]} ${styles.containers}`}>
      <h2>Details</h2>
      {selectedRecipe && (
        <div className={styles["ing-details"]}>
          <h3>Hops</h3>
          
          <ul className={styles["ing-ul"]}>
            {selectedRecipe.ingredients?.hops?.map((hop, i) => (
              <li key={i}>
                {hop.name} {hop.amount} Adding time: {hop.time}
              </li>
            ))}
          </ul>
          <h3>Yeast</h3>
          <ul className={styles["ing-ul"]}>
            {selectedRecipe.ingredients.yeast.map((yeast, i) => (
              <li key={i}>
                {yeast.name} {yeast.amount}
              </li>
            ))}
          </ul>
          <h3>Malts</h3>
          <ul className={styles["ing-ul"]}>
            {selectedRecipe.ingredients.malts.map((malt, i) => (
              <li key={i}>
                {malt.name} {malt.amount}
              </li>
            ))}
          </ul>
          <h2>Recipe instructions</h2>
          <ul>
            {selectedRecipe.instructions.map((instruction) => (
              <li key={instruction}>{instruction}</li>
            ))}
          </ul>
          {/* <BrewButton selectedRecipe={selectedRecipe} /> */}
        </div>
      )}
    </div>
  );
}
