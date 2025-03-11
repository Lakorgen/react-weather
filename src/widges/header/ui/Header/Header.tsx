import { NavLink } from "react-router";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <nav>
        <ul className={`${styles.navList}`}>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
              to="/"
            >
              Main
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
              to="/history"
            >
              History
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
