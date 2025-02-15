import AddIngredientComponent from "../components/AddIngredientComponent";
import styles from './InventoryPage.module.css'

function InventoryPage() {
  return (
    <div className={styles['inventory-container']}>
      <AddIngredientComponent ingType='malt' />
      <AddIngredientComponent ingType='hop' />
      <AddIngredientComponent ingType='yeast' />
      <AddIngredientComponent ingType='extra' />
    </div>
  );
}

export default InventoryPage;
