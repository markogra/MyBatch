import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import IngredientComponent from "../components/IngredientComponent";

describe("IngredientComponent", () => {
  let ingredientType;
  let quantity;
  let setQuantity;
  let allIngredients;
  let ingredients;
  let addIngredients;
  let handleDelete;
  let clearSelectedIngredient;

  beforeEach(() => {
    ingredientType = "testType";
    quantity = "testQuantity";
    setQuantity = jest.fn();
    allIngredients = ["ingredients1", "ingredients2"];
    ingredients = [{ _id: "1", name: "test1", amount: "1" }];
    addIngredients = jest.fn();
    handleDelete = jest.fn();
    clearSelectedIngredient = jest.fn();

    render(
      <IngredientComponent
        ingredientType={ingredientType}
        quantity={quantity}
        setQuantity={setQuantity}
        allIngredients={allIngredients}
        ingredients={ingredients}
        addIngredients={addIngredients}
        handleDelete={handleDelete}
        clearSelectedIngredient={clearSelectedIngredient}
      />
    );
  });

  it("renders the component correctly", () => {
    expect(screen.getByText("Current testType")).toBeInTheDocument();
  });

  it("should add quantity correctly", () => {
    const inputElement = screen.getByPlaceholderText("Enter quantity");
    fireEvent.change(inputElement, { target: { value: "10" } });
    expect(setQuantity).toHaveBeenCalledWith("10");
  });

  it("should handle delete correctly", () => {
    const deleteButton = document.querySelector(".delete-button");
    fireEvent.click(deleteButton);
    expect(handleDelete).toHaveBeenCalledWith(ingredients[0]._id);
  });
});
