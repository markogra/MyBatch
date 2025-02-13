import AddIngredientComponent from "../components/AddIngredientComponent";
import styles from './InventoryPage.module.css'

function InventoryPage() {
  return (
    <div className={styles['inventory-container']}>
      <AddIngredientComponent ingType='malts' />
      <AddIngredientComponent ingType='hops' />
      <AddIngredientComponent ingType='yeast' />
      <AddIngredientComponent ingType='extra' />
    </div>
  );
}

export default InventoryPage;
