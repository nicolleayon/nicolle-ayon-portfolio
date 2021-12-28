import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className={styles["nav-logo"]}>
        Nicolle Ayon Campos
      </NavLink>
      <ul>
        <li>
          <NavLink activeClassName={styles.active} to="/">
            home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="/about-me">
            about
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="/resume">
            resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
