import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import './navbar.css';

const navLink = [
  { to: "/", label: "MyBatch" },
  { to: "/inventory", label: "Inventory" },
  { to: "/our-recipes", label: "Our Recipes" },
  { to: "/my-recipes", label: "My Recipes" },
  { to: "/how-to-brew", label: "How to Brew"}
];

function NavBar() {
  const location = useLocation();
  return <div>
    <HamburgerMenu />
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
  </div>
}

export default NavBar;