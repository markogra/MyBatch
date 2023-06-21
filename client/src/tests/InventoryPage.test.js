import { render, screen, act } from "@testing-library/react";
import InventoryPage from "../pages/InventoryPage";
import {
  createIngredients,
  getAllIngredients,
  deleteIngredientFromDb,
} from "../utils/ApiService";

jest.mock("../utils/ApiService");

describe("InventoryPage", () => {
  let allRecipes;

  beforeEach(async () => {
    allRecipes = [
      {
        ingredients: {
          hops: [{ name: "Test Hop", amount: "2" }],
          malts: [{ name: "Test Malt", amount: "3" }],
          yeast: "Test Yeast",
        },
      },
    ];

    getAllIngredients.mockResolvedValueOnce([]);
    createIngredients.mockImplementation(() => Promise.resolve());
    deleteIngredientFromDb.mockImplementation(() => Promise.resolve());

    await act(async () => {
      render(<InventoryPage allRecipes={allRecipes} />);
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component correctly", () => {
    expect(screen.getByText("Current hops")).toBeInTheDocument();
    expect(screen.getByText("Current malts")).toBeInTheDocument();
    expect(screen.getByText("Current yeast")).toBeInTheDocument();
    expect(screen.getByText("Current additions")).toBeInTheDocument();
  });
});
