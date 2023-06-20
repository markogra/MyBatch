import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

describe("renders correct navigation links", () => {
  it("renders correct navigation links", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    const navLinks = screen.getAllByRole("link");

    const expectedLinks = [
      { to: "/", label: "MyBatch" },
      { to: "/inventory", label: "Inventory" },
      { to: "/our-recipes", label: "Our Recipes" },
      { to: "/my-recipes", label: "My Recipes" },
      { to: "/how-to-brew", label: "How to Brew"}
    ];

    expect(navLinks.length).toBe(expectedLinks.length);

    navLinks.forEach((navLink, index) => {
      expect(navLink.getAttribute("href")).toBe(expectedLinks[index].to);
      expect(navLink.textContent).toBe(expectedLinks[index].label);
    });
  });
});
