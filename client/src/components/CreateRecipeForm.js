import { InputField, TextArea, SelectAutoWidth } from "./mui.js";

export default function CreateRecipeForm({
  handleRecipeClick,
  handleSubmit,
  allHops,
  allMalts,
  allYeast,
}) {
  console.log(allHops);
  return (
    <div className="my-recipes-form">
      <h2 style={{ fontFamily: "cursive" }}>
        Release creativity, create your own recipe
      </h2>

      <form onSubmit={handleSubmit} className="new-recipe-form">
        <div className="left-side-createRecipe">
          <div className="ing-row">
            <InputField label="Name" width="25ch" />
            <InputField label="Beer Style" width="25ch" />
          </div>
          <TextArea
            placeholder="Add your instructions here"
            className="textarea"
          />
        </div>
        <div className="right-side-createRecipe">
          <h3>Ingredients</h3>
          <div className="ing-row">
            <SelectAutoWidth type="hops" allHops={allHops} />
            <InputField label="Qty" width="12ch" />
          </div>
          <div className="ing-row">
            <SelectAutoWidth type="malt" allMalts={allMalts} />
            <InputField label="Qty" width="12ch" />
          </div>
          <div className="ing-row">
            <SelectAutoWidth type="yeast" allYeast={allYeast} />
            <InputField label="Qty" width="12ch" />
          </div>

          <button type="submit" className="create-recipe-btn">
            Create Recipe
          </button>
        </div>
      </form>
    </div>
  );
}
