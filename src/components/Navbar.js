import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SettingsModal from "./SettingModal";
import styles from "../styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const handleSettingsClick = () => {
    setShowSettingsModal(true);
  };

  const handleCloseSetting = () => {
    setShowSettingsModal(false);
  };

  return (
    <div>
      {showSettingsModal && (
        <SettingsModal onCloseSetting={handleCloseSetting} />
      )}
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
            <button
              onClick={handleSettingsClick}
              className={`${styles["btn"]}`}
            >
              <FontAwesomeIcon icon={faCog} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
