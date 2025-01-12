import { Request, Response} from "express";
import InventoryItem from "../models/inventoryItemModel";


export const getAllInventoryItems = async (req:Request, res:Response) => {
  try {
    const fullInventory = await InventoryItem.find();
    res.status(200).json({
      status:'Success',
      results:fullInventory.length,
      data:fullInventory
    });
  } catch (err) {
    const error = err as Error;
    res.status(404).json({
      statis:'Fail',
      message:error.message
    })
  }
};

export const createInventoryItem = async (req:Request, res:Response) => {

  const { name, amount, type, unit } = req.body;

  try {
    const existingIngredient = await InventoryItem.findOne({ name, type });
    
    if (existingIngredient) {

      console.log("Updating existing ingredient")
      existingIngredient.amount += Number(amount);
     
      await existingIngredient.save();

      res.status(200).json({
        status:'Sucess',
        message:`You have added ${amount} ${unit} of ${name} to your inventory!`
      });
    } else {
      console.log("Creating new ingredient");
      const newIngredient  = await InventoryItem.create(req.body)
      res.status(201).json({
        status:'Success',
        newIngredient
      });
    }
  } catch (err) {
    const error = err as Error
    res.status(400).json({
      status:'Fail',
      message:error.message
    })
  }
};

export const deleteInventoryItem = async (req:Request, res:Response) => {
  try {
   await InventoryItem.findByIdAndDelete(req.params.id)

    console.log("Item deleted");
   res.status(200).json({
    status:'Success',
    message:'Inventory item deleted'
   })
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, error: "Failed to delete ingredient" });
  }
};