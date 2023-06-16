import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const navLink = [
  { to: "/", label: "MyBatch" },
  { to: "/inventory", label: "Inventory" },
  { to: "/our-recipes", label: "Our Recipes" },
  { to: "/my-recipes", label: "My Recipes" },
];

function NavBar() {
  const location = useLocation();

  return (
    <nav className="mainNav">
      <ul>
        {navLink.map((navLink) => (
          <li key={navLink.to}>
            <NavLink
              to={navLink.to}
              className={location.pathname === navLink.to ? "active-link" : ""}
            >
              {navLink.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;