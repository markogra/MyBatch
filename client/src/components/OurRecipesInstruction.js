import BrewButton from "./BrewButton";

export default function OurRecipesInstruction({ selectedRecipe }) {
  return (
    <div className="recipe-instruction containers">
      <h2>Details</h2>
      {selectedRecipe && (
        <div className="ing-details">
          <h3>Hops</h3>
          <ul className="ing-ul">
            {selectedRecipe.ingredients.hops.map((hop) => (
              <li key={hop._id}>
                {hop.name} {hop.amount} Adding time: {hop.time}
              </li>
            ))}
          </ul>
          <h3>Yeast</h3>
          <ul className="ing-ul">
            {selectedRecipe.ingredients.yeast.map((yeast) => (
              <li key={yeast._id}>
                {yeast.name} {yeast.amount}
              </li>
            ))}
          </ul>
          <h3>Malts</h3>
          <ul className="ing-ul">
            {selectedRecipe.ingredients.malts.map((malt) => (
              <li key={malt._id}>
                {malt.name} {malt.amount}
              </li>
            ))}
          </ul>
          <h2>Recipe instructions</h2>
          <ul>
            {selectedRecipe.instructions.map((instruction) => (
              <li key={instruction}>{instruction}</li>
            ))}
          </ul>
          <BrewButton selectedRecipe={selectedRecipe} />
        </div>
      )}
    </div>
  );
}
