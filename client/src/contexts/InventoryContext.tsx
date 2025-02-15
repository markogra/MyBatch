import { createContext, ReactNode, useEffect, useState } from "react";
import {getAllIngredients, addNewIngredient, deleteIngredient} from '../utils/ApiService'

interface InventoryContextType {
  allIngredients: any;
}

interface InventoryProviderProps {
  children: ReactNode;
}

const InventoryContext = createContext<InventoryContextType>({
  allIngredients: null
})

function InventoryProvider({children}: InventoryProviderProps){

  const [allIngredients, setAllIngredients] = useState(null)

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        // const response = await fetch('http://localhost:3500/inventory');
        // const allIngredients = await response.json();

        const allIngredients = await getAllIngredients()
        console.log(allIngredients);
        setAllIngredients(allIngredients)
      } catch (err) {
        const error = err as Error;
        console.error(error.message);
      }
    };
  
    fetchInventory();
  
  }, []);

  return (
    <InventoryContext.Provider value={{allIngredients}}>
      {children}
    </InventoryContext.Provider>
  )

  }

export {InventoryProvider,InventoryContext}