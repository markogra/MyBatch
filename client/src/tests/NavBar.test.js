import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

test("renders correct navigation links", () => {
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
  ];

  expect(navLinks.length).toBe(expectedLinks.length);

  navLinks.forEach((navLink, index) => {
    expect(navLink.getAttribute("href")).toBe(expectedLinks[index].to);
    expect(navLink.textContent).toBe(expectedLinks[index].label);
  });
});

// test('adds "active-link" class to the current location', () => {
//   render(
//     <BrowserRouter>
//       <NavBar />
//     </BrowserRouter>
//   );

//   const currentLocation = "/inventory";
//   window.history.pushState({}, "Test page", currentLocation);

//   const activeLink = screen.getByText("Inventory");

//   console.log(activeLink.classList);

//   expect(activeLink.classList.contains("active-link")).toBe(true);
// });
