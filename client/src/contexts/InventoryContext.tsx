import React from "react";
import { createContext, useEffect, useState, useMemo } from "react";
import {getAllIngredients, addNewIngredient, deleteIngredient, getOurRecipes} from '../utils/ApiService'
import {InventoryContextType, InventoryProviderProps, Recipe, Ingredient} from '../types'
 
const InventoryContext = createContext<InventoryContextType>({
  allIngredients: [],
  setAllIngredients: () => {},
  allOurRecipes: [],
  loading: false,
  error: null,
  selectedRecipe: {} as Recipe,
  setSelectedRecipe: () => {}

});

function InventoryProvider({children}: InventoryProviderProps){

  const [allIngredients, setAllIngredients] = useState<Ingredient[]>([])
  const [allOurRecipes, setAllOurRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);


  useEffect(() => {
    const fetchInventory = async () => {
      setLoading(true)
      setError(null)
      try {
        const ingredientsData = await getAllIngredients()
        const recipesData = await getOurRecipes()
        
        setAllIngredients(ingredientsData.data || [])
        setAllOurRecipes(recipesData.data || [])

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
    () => ({ allIngredients, setAllIngredients, allOurRecipes, loading, error, selectedRecipe, setSelectedRecipe }),
    [allIngredients, allOurRecipes, loading, error, selectedRecipe, setSelectedRecipe]
  );

  return (
    <InventoryContext.Provider value={contextValue}>
      {children}
    </InventoryContext.Provider>
  )

  }

export {InventoryProvider,InventoryContext}