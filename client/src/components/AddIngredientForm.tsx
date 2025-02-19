import { useContext, useState } from "react";
import { addNewIngredient } from "../utils/ApiService";
import styles from '../pages/InventoryPage.module.css'
import { 
  AddButton, 
  InputField, 
  SelectAutoWidth,
  UnitSelect 
} from "./mui";
import { InventoryContext } from "../contexts/InventoryContext";
import { MenuItem } from "@mui/material";

type AddIngredientProps = {
  ingType: string;
};

export default function AddIngredientForm({ingType}:AddIngredientProps) {
  
  const {setAllIngredients} = useContext(InventoryContext)
  const [ingName, setIngName] = useState('')
  const [ingQuantity, setIngQuantity] = useState('')
  const [ingUnit, setIngUnit] = useState('')

    const allMalts = ["Pilsner Malt","Pale Malt","Crystal Malt","Brown Malt","Chocolate Malt","Roasted Barley","Black Patent Malt","Munich Malt","Wheat Malt","Special B Malt","Maris Otter","Caramel Munich","Carafa Special II","Peated Malt"]
    const allHops = ["Saaz","Cascade","Fuggle","Tettnang","East Kent Goldings","Hallertauer Mittelfrüh"]
    const allYeast = ["Czech Lager","American Ale","English Ale","Belgian Witbier","Belgian Ale","Belgian Saison","Irish Ale","Scottish Ale","German Lager"]
    const allExtra = ["Honey", "Coriander", "Ginger", "Vanilla", "Coffee", "Cocoa", "Chili", "Berries", "Tea", "Herbs"]

  const ingredientOptions =
    ingType === "malt"
      ? allMalts
      : ingType === "hop"
      ? allHops
      : ingType === "yeast"
      ? allYeast
      : ingType === 'extra'
      ? allExtra
      : [];

  const handleAddIngredient = async() => {
    const newIngredient = await addNewIngredient(ingName, Number(ingQuantity), ingType, ingUnit)
    console.log("new ingredient ", newIngredient.newIngredient)

    if(newIngredient.newIngredient){
      setAllIngredients((prevIngredients )=>{
        return [...prevIngredients, newIngredient.newIngredient]
      })
    }
  }

  return (
    <div className={styles["add-ing-form-container"]}>
      <div className={styles['first-row-form']}>
        <SelectAutoWidth
          value={ingName}
          onChange={(e:any) => setIngName(e.target.value)}
        >
          {ingredientOptions.map((ing) => {
          return ( 
            <MenuItem key={ing} value={ing}>
              {ing}
            </MenuItem>)
          })}
        </SelectAutoWidth>
      </div>

      <div className={styles["quantity-unit-line"]}>
        <InputField
          sx={{ flex: "1 1 70%", minWidth: "70px"}}
          label="Quantity"
          value={ingQuantity}
          onChange={(e) => setIngQuantity(e.target.value)}
        />
        <UnitSelect
         sx={{ flex: "1 1 30%", minWidth: "50px"}}
         value={ingUnit} 
         onChange={(e:any) => setIngUnit(e.target.value)} 
         />
      </div>
      <AddButton onClick={handleAddIngredient} />
    </div>
  )
}
