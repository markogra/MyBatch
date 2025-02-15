import { useContext, useState } from "react";
import { addNewIngredient } from "../utils/ApiService";
import styles from '../pages/InventoryPage.module.css'
import { 
  AddButton, 
  InputField, 
  SelectAutoWidth,
  UnitSelect 
} from "./mui";
import { InventoryContext } from "../contexts/InventoryContext.js";

export default function AddIngredientForm() {
  const [ingName, setIngName] = useState('')
  const [ingQuantity, setIngQuantity] = useState('')
  const [ingUnit, setIngUnit] = useState('')

  return (
    <div className={styles["add-ing-form-container"]}>
      <div className={styles['first-row-form']}>
        <SelectAutoWidth
          value={ingName}
          onChange={(e:any) => setIngName(e.target.value)}
        />
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
      <AddButton onClick={()=>{addNewIngredient(ingName, ingQuantity, ingUnit)}} />
    </div>
  )
}
