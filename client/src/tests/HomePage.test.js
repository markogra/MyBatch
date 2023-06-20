import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Homepage from "../pages/HomePage";

describe("Home component", () => {
  it("renders homepage content", () => {
    render(<MemoryRouter>
      <Homepage />
    </MemoryRouter>);

    expect(
      screen.getByText("Welcome to MyBatch Home Page")
    ).toBeInTheDocument();
    expect(
      screen.getByText(/MyBatch is your ultimate homebrewing companion/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Explore a vast collection of recipes sourced/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Seamlessly browse through a diverse range of hops/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Unlock your creativity with MyBatch's intuitive interface/i
      )
    ).toBeInTheDocument();
  });

  it("renders homepage container with correct class", () => {
    render(<MemoryRouter>
      <Homepage />
    </MemoryRouter>);

    const homepageContainer = screen.getByTestId("homepage-container");

    expect(homepageContainer).toBeInTheDocument();
    expect(homepageContainer).toHaveClass("homepage-container");
  });
});
