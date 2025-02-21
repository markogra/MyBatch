import { useContext } from "react"
import styles from '../../pages/ourRecipes.module.css'
import { InventoryContext } from "../../contexts/InventoryContext"

export default function RecipeItem({recipe}:any){
  const {selectedRecipe, setSelectedRecipe} = useContext(InventoryContext)

  function handleShowRecipe(){
    setSelectedRecipe(recipe)
  }

  return (
    <li key={recipe._id}
      onClick={() => handleShowRecipe()}
       className={selectedRecipe === recipe ? styles["active-recipe"] : ""}
       >
      <h3>{recipe.name}</h3>
      <p className={styles["recipe-description"]}>{recipe.description}</p>
    </li>
  )
}