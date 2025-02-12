import styles from './InventoryPage.module.css'
import AddIngredientComponent from "../components/AddIngredientComponent";

function InventoryPage() {
  return (
    <div className={styles['inventory-container']}>
      <AddIngredientComponent />
      <AddIngredientComponent  />
      <AddIngredientComponent />
      <AddIngredientComponent />
    </div>
  );
}

export default InventoryPage;
