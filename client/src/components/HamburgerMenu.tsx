import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './navbar.css';

const navLink = [
  { to: "/", label: "MyBatch" },
  { to: "/inventory", label: "Inventory" },
  { to: "/our-recipes", label: "Our Recipes" },
  { to: "/my-recipes", label: "My Recipes" },
  { to: "/how-to-brew", label: "How to Brew"}
];

const HamburgerMenu = () => {
  const [dropdown, setDropdown] = useState(<></>);
  const [isDown, setIsDown] = useState(false);

  const handleNav = () => {
    setIsDown(false);
    setDropdown(<></>)
  }

  const handleClick = () => {
    if (!isDown) {
      setIsDown(true);
    setDropdown(<nav>
    <ul className="dropdown_nav">
      {navLink.map((navLink) => (
        <div className='dropdown_list'>
          <li key={navLink.to} >
            <NavLink 
              className='dropdown_list_item'
              to={navLink.to} onClick={handleNav}
            >
              {navLink.label}
            </NavLink>
          </li>
        </div>
      ))}
    </ul>
  </nav>)
    } else {
      setIsDown(false);
      setDropdown(<></>)
    }
  }

  return <div>
    <div className="header">
      <NavLink className='logo' to='/'>MyBatch</NavLink>
      <div className="hamburger_menu" onClick={handleClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
      {dropdown}
  </div>
}

export default HamburgerMenu;