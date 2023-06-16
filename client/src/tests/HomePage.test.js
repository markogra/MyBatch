import { render, screen } from "@testing-library/react";
import Homepage from "../pages/HomePage";

test("renders homepage content", () => {
  render(<Homepage />);

  expect(screen.getByText("Welcome to MyBatch Home Page")).toBeInTheDocument();
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

test("renders homepage container with correct class", () => {
  render(<Homepage />);

  const homepageContainer = screen.getByTestId("homepage-container");

  expect(homepageContainer).toBeInTheDocument();
  expect(homepageContainer).toHaveClass("homepage-container");
});
