import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <nav className="mainNav">
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className={location.pathname === "/" ? "active-link" : ""}
          >
            MyBatch
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/inventory"
            className={location.pathname === "/inventory" ? "active-link" : ""}
          >
            Inventory
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/our-recipes"
            className={
              location.pathname === "/our-recipes" ? "active-link" : ""
            }
          >
            Our recipes
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/my-recipes"
            className={location.pathname === "/my-recipes" ? "active-link" : ""}
          >
            My recipes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
