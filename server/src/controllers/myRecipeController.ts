import { Request, Response} from "express";
import MyRecipe from "../models/myRecipeModel";

export const getAllMyRecipes = async (req:Request, res:Response) => {
  try {
    const allMyRecipes = await MyRecipe.find();
    res.status(200).json({
      status:'Success',
      results:allMyRecipes.length,
      data: allMyRecipes
    });
  } catch(err) {
    const error = err as Error;
    res.status(404).json({
      status:'Fail',
      message:error.message
    })
  }
};

export const createMyRecipe = async (req:Request, res:Response) => {
  try {

    const myNewRecipe = await MyRecipe.create(req.body);
    res.status(201).json({
      status:'Success',
      message:'You have created new recipe!',
      myNewRecipe 
    });

  }catch(err) {
    
    const error = err as Error;
    res.status(400).json({
      status:'Fail',
      message:error.message
    })
  }
};