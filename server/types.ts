import { ObjectId } from "mongoose"

export interface Ingredient {
  _id: ObjectId,
  name: string,
  __v: number
}

export interface CreatedIngredient {
  name: string,
  amount: string,
  type: string,
  _id: ObjectId,
  __v: number
}

export interface Recipe {
  ingredients: littleIngedient[],
  _id: ObjectId,
  name: string,
  style: string,
  description: string,
  batchSize: string,
  instructions: string[],
  __v: number
}

export interface MyRecipe {
  ingredients: {
    name: string,
    amount: string,
    _id: ObjectId
  } [],
  _id: ObjectId,
  name: string,
  style: string,
  instructions: string,
  __v: number
}

export interface PostedMyRecipe {
  name: string,
  style: string,
  ingredients: {
    hops: littleIngedient[],
    malts: littleIngedient[],
    yeast: littleIngedient[],
  },
  instructions: string,
  _id: ObjectId
}

export interface PostedOurRecipe {
  name: string,
  style: string,
  description: string,
  batchSize: string,
  ingredients: {
    hops: littleIngedient[],
    malts: littleIngedient[],
    yeast: littleIngedient[],
  },
  instructions: string[],
  __id: ObjectId
}

interface littleIngedient {
  name: string,
  amount: string,
  _id: ObjectId
}