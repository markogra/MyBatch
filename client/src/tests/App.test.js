import React from "react";
import { MemoryRouter } from "react-router-dom";
import { screen, render } from "@testing-library/react";

import App from "../App";

test("renders App component", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const homePageElement = screen.getByText(/Welcome to MyBatch Home Page/i);
  expect(homePageElement).toBeInTheDocument();
});
