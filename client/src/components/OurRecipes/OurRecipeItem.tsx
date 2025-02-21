import { useContext } from "react"
import { Recipe } from "../../types"
import { InventoryContext } from "../../contexts/InventoryContext"

export default function RecipeItem({recipe}:any){
  const {selectedRecipe, setSelectedRecipe} = useContext(InventoryContext)

  return (
    <li key={recipe._id}
      onClick={() => setSelectedRecipe(recipe)}
       className={selectedRecipe === recipe ? "active-recipe" : ""}
       >
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
    </li>
  )
}