import { useContext } from "react";
import AddIngredientComponent from "../components/layout/AddIngredientComponent";
import styles from './InventoryPage.module.css'
import Spinner from "../components/ui/Spinner";
import { InventoryContext } from "../contexts/InventoryContext";


function InventoryPage() {

  const {loading} = useContext(InventoryContext)


  return (
    <div className={styles['inventory-container']}>
      {
        loading ? (
          <Spinner />
        ) :
        <>   
          <AddIngredientComponent ingType='malt' />
          <AddIngredientComponent ingType='hop' />
          <AddIngredientComponent ingType='yeast' />
          <AddIngredientComponent ingType='extra' />
        </>
      }
      
    </div>
  );
}

export default InventoryPage;
