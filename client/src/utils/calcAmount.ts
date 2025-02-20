import { Ingredient } from "../types"

export default function calcAmount(allIng:Ingredient[], name:string, amount:number, unit:string){
  // 1. Check if there is ingredient with that name
  let existingIngredient:any = allIng.find((ing:any)=>{
    return ing.name === name
  })

  if(existingIngredient){
    console.log('Ingredient exists, updating amount...')
    let  newAmount = existingIngredient.amount + (unit === 'kilograms'? amount * 1000 : amount)
    return {exists:true, newAmount}

  }

  return {exists:false, newAmount:(unit === 'kilograms'? amount * 1000 : amount)}
  
  // 2. if there is you need to add amount of that new ingredient
  // then check the unit if the unit is grams just add that
  // if the unit is kilograms then add unit * 1000(units in DB )
  // are alweys in grams

  // 3. leter when showing the ingredient we will just show 
  // ingredints.amount / 1000 if it is more then 1000 and add kg
  // if not we will just show ing.amount and add g
}