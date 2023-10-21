import { AddButton, InputField, SelectAutoWidth, UnitSelect } from "./mui.js";

export default function AddIngredientForm({
  name,
  setName,
  quantity,
  setQuantity,
  unit,
  setUnit,
  addIngredient,
  type,
  allMalts,
  allHops,
  allYeast,
}) {
  return (
    <div className="add-ing-form-container">
      <SelectAutoWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        type={type}
        allHops={allHops}
        allMalts={allMalts}
        allYeast={allYeast}
      />
      <div className="quantity-unit-line">
        <InputField
          width="12ch"
          label="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <UnitSelect value={unit} onChange={(e) => setUnit(e.target.value)} />
      </div>

      <AddButton onClick={addIngredient} />
    </div>
  );
}
