import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import styles from './NavBar.module.css'
import { useState } from "react";

function NavBar() {

  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <nav className={styles.mainNav}>
      <div className={styles.hamburgerDiv }  onClick={() => setMenuOpen(!menuOpen)}>
        <MenuIcon className={styles.menuIcon} />
      </div>
      <ul  className={menuOpen ? styles.open : ""}>
        <li>
          <NavLink
            to="/"
            className={({isActive}) => (isActive ? styles.activeLink: '')}
          >
            MyBatch
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/inventory"
            className={({isActive}) => (isActive ? styles.activeLink: '')}
          >
            Inventory
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/our-recipes"
            className={
              ({isActive}) => (isActive ? styles.activeLink: '')
            }
          >
            Our recipes
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/my-recipes"
            className={({isActive}) => (isActive ? styles.activeLink: '')}
          >
            My recipes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
