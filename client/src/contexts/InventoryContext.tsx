import { createContext, ReactNode, useEffect, useState, useMemo } from "react";
import {getAllIngredients, addNewIngredient, deleteIngredient, getOurRecipes} from '../utils/ApiService'

interface Ingredient {
  name: string;
  amount: number;
  unit: string;
  type: string;
}

interface Recipe {
  name: string;
  style: string;
  description: string;
  batchSize: string;
  ingredients: object;
  instructions: string[];
}

interface InventoryContextType {
  allIngredients: Ingredient[];
  allOurRecipes: Recipe[];
  loading: boolean;
  error: string | null;
}

interface InventoryProviderProps {
  children: ReactNode;
}

const InventoryContext = createContext<InventoryContextType>({
  allIngredients: [],
  allOurRecipes: [],
  loading: false,
  error: null,
});

function InventoryProvider({children}: InventoryProviderProps){

  const [allIngredients, setAllIngredients] = useState<Ingredient[]>([])
  const [allOurRecipes, setAllOurRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)


  useEffect(() => {
    const fetchInventory = async () => {
      setLoading(true)
      setError(null)
      try {
    
        const ingredientsData = await getAllIngredients()
        const recipesData = await getOurRecipes()
        
        setAllIngredients(ingredientsData.data || [])
        setAllOurRecipes(recipesData || [])

      } catch (err) {
        const error = err as Error;
        console.error(error.message);
        setError(error.message)
      }finally {
        setLoading(false)
      }
    };
  
    fetchInventory();
  
  }, []);

  const contextValue = useMemo(
    () => ({ allIngredients, allOurRecipes, loading, error }),
    [allIngredients, allOurRecipes, loading, error]
  );

  return (
    <InventoryContext.Provider value={contextValue}>
      {children}
    </InventoryContext.Provider>
  )

  }

export {InventoryProvider,InventoryContext}