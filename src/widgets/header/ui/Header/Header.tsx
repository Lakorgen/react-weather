import { NavLink } from "react-router";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className="container">
        <nav>
          <ul className={`${styles.navList}`}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
                to="/"
              >
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
                to="/history"
              >
                История
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
