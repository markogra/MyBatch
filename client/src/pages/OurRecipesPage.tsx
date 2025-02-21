import { useState } from "react";
import styles from './ourRecipes.module.css'
import OurRecipesList from "../components/OurRecipes/OurRecipesList";
import OurRecipesInstruction from "../components/OurRecipes/OurRecipesInstruction";

export default function OurRecipesPage() {

  return (
    <div className={styles["our-recipes"]}>
      <OurRecipesList />
      <OurRecipesInstruction />
    </div>
  );
}
