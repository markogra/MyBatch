import { AddButton, InputField, SelectAutoWidth, UnitSelect } from "./mui.js";

export default function AddIngredientForm({
  name,
  setName,
  quantity,
  setQuantity,
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
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <UnitSelect />
      </div>

      <AddButton onClick={addIngredient} />
    </div>
  );
}
