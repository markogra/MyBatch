import { useContext, useState } from "react";
import { addNewIngredient } from "../utils/ApiService";
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
    <div className="add-ing-form-container">
      <SelectAutoWidth
        value={ingName}
        onChange={(e:any) => setIngName(e.target.value)}
     
      />
      <div className="quantity-unit-line">
        <InputField
          width="12ch"
          label="Quantity"
          value={ingQuantity}
          onChange={(e) => setIngQuantity(e.target.value)}
        />
        <UnitSelect
         value={ingUnit} 
         onChange={(e:any) => setIngUnit(e.target.value)} 
         />
      </div>

      <AddButton 

      onClick={()=>{addNewIngredient(ingName, ingQuantity, ingUnit)}} 
      />
    </div>
  )
}
