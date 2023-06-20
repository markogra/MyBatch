import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MyRecipesPage from "../pages/MyRecipesPage";

describe("MyRecipesPage", () => {
  const allRecipes = [
    {
      _id: "1",
      name: "Test Recipe",
      description: "This is a test recipe.",
      instructions: ["Step 1", "Step 2", "Step 3"],
      ingredients: {
        hops: [{ _id: "1", name: "Test Hop", amount: "2" }],
        malts: [{ _id: "2", name: "Test Malt", amount: "3" }],
        yeast: "Test Yeast",
      },
    },
  ];

  const myRecipes = [
    {
      _id: "2",
      name: "My Test Recipe",
      style: "IPA",
      instructions: "Mix and boil",
      ingredients: {
        hops: [{ name: "My Test Hop", amount: "2" }],
        malts: [{ name: "My Test Malt", amount: "3" }],
        yeast: [{ name: "My Test Yeast", amount: "1" }],
      },
    },
  ];

  it("renders recipe form correctly", () => {
    render(<MyRecipesPage myRecipes={myRecipes} allRecipes={allRecipes} />);

    expect(
      screen.getByText("Release creativity, create your own recipe")
    ).toBeInTheDocument();
    expect(screen.getByText("Ingredients")).toBeInTheDocument();
    expect(screen.getByText("Your recipe list")).toBeInTheDocument();
  });

  it("shows recipe details when a recipe is clicked", async () => {
    render(<MyRecipesPage myRecipes={myRecipes} allRecipes={allRecipes} />);

    const listItem = screen.getByText("My Test Recipe");
    fireEvent.click(listItem);

    const recipeName = screen.getByText("My Test Recipe(IPA)");
    const ingredientsHeading = screen.getByText("Ingredients:");
    const hopText = screen.getByText("My Test Hop: 2");
    const maltText = screen.getByText("My Test Malt: 3");
    const yeastText = screen.getByText("Yeast: My Test Yeast, 1");
    const instructionsHeading = screen.getByText("Instructions:");
    const instructionsText = screen.getByText("Mix and boil");

    expect(recipeName).toBeInTheDocument();
    expect(ingredientsHeading).toBeInTheDocument();
    expect(hopText).toBeInTheDocument();
    expect(maltText).toBeInTheDocument();
    expect(yeastText).toBeInTheDocument();
    expect(instructionsHeading).toBeInTheDocument();
    expect(instructionsText).toBeInTheDocument();
  });

  it("adds a recipe to your recipe list when a new recipe is created", async () => {
    render(<MyRecipesPage myRecipes={myRecipes} allRecipes={allRecipes} />);

    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: "New Recipe" },
    });
    fireEvent.change(screen.getByLabelText(/Beer Style/i), {
      target: { value: "Pale Ale" },
    });
    fireEvent.change(screen.getByLabelText(/Add Your Instructions here/i), {
      target: { value: "Mix and ferment" },
    });
    fireEvent.change(screen.getByLabelText(/Hops/i, { selector: "select" }), {
      target: { value: "New Hop" },
    });
    fireEvent.change(
      screen.getByLabelText(/Qty/i, { selector: "#hopsQuantity" }),
      {
        target: { value: "1" },
      }
    );
    fireEvent.change(screen.getByLabelText(/Malts/i, { selector: "select" }), {
      target: { value: "New Malt" },
    });
    fireEvent.change(
      screen.getByLabelText(/Qty/i, { selector: "#maltsQuantity" }),
      {
        target: { value: "2" },
      }
    );
    fireEvent.change(screen.getByLabelText(/Yeast/i, { selector: "select" }), {
      target: { value: "New Yeast" },
    });
    fireEvent.change(
      screen.getByLabelText(/Qty/i, { selector: "#yeastQuantity" }),
      {
        target: { value: "1" },
      }
    );

    fireEvent.click(screen.getByText("Create Recipe"));

    await waitFor(() => {
      expect(screen.getByText(/New Recipe/i)).toBeInTheDocument();
      expect(screen.getByText(/Pale Ale/i)).toBeInTheDocument();
    });
  });
});
