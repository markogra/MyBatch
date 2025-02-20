import { useContext, useState } from "react";
import { addNewIngredient } from "../../utils/ApiService";
import { AddIngredientProps } from "../../types";
import styles from '../../pages/InventoryPage.module.css'
// **** MUI  *****
import AddButton from "../mui/AddButton";
import InputField from "../mui/InputField";
import SelectAutoWidth  from "../mui/SelectAutoWidth";
import  UnitSelect  from "../mui/UnitSelect";
// ****************
import { InventoryContext } from "../../contexts/InventoryContext";
import { MenuItem } from "@mui/material";
import calcAmount from "../../utils/calcAmount";



export default function AddIngredientForm({ingType}:AddIngredientProps) {
  
  const {allIngredients, setAllIngredients} = useContext(InventoryContext)
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

  const resetForm = () => {
    setIngName("");
    setIngQuantity("");
    setIngUnit("");
  }

  const handleAddIngredient = async () => {
    const { exists, newAmount } = calcAmount(allIngredients, ingName, Number(ingQuantity), ingUnit);

    if(ingName==='' || ingUnit === '' || isNaN(Number(ingQuantity))){
      alert('Please select name and unit, and add number as quantity')
      return
    }
  
    if (exists) {
      setAllIngredients((prevIngredients) =>
        prevIngredients.map((ing) =>
          ing.name === ingName ? { ...ing, amount: newAmount } : ing
        )
      );
      console.log("Updated ingredient amount!");
    } else {
      const newIngredient = await addNewIngredient(ingName, newAmount, ingType, ingUnit);
      
      if (newIngredient.newIngredient) {
        setAllIngredients((prevIngredients) => [...prevIngredients, newIngredient.newIngredient]);
      }
    }
  
    resetForm();
  };

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
