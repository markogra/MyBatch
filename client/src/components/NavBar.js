import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="mainNav">
      <ul>
        <li>
          <Link to="/">MyBatch</Link>
        </li>
        <li>
          <Link to="/inventory">Inventory</Link>
        </li>
        <li>
          <Link to="/our-recipes">Our recipes</Link>
        </li>
        <li>
          <Link to="/how-to-brew">How to Brew</Link>
        </li>
        <li>
          <Link to="/my-recipes">My recipes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
