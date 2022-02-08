import React from "react";
import { NavLink } from "react-router-dom";
import Modal from "../UI/Modal";
import styles from "../styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <Modal title="Settings">
        <h1>test h1</h1>
        <h3>test h3</h3>
      </Modal>
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
          <li>
            <FontAwesomeIcon icon={faCog} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
