import "./InventoryPage.css";
import AddIngredientComponent from "../components/AddIngComponent";

function InventoryPage({ allHops, allMalts, allYeast }) {
  return (
    <div className="inventory-container">
      <AddIngredientComponent type="malt" allMalts={allMalts} />
      <AddIngredientComponent type="hops" allHops={allHops} />
      <AddIngredientComponent type="yeast" allYeast={allYeast} />
      <AddIngredientComponent type="additions" />
    </div>
  );
}

export default InventoryPage;
