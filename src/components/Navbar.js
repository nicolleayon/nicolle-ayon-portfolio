import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "../UI/Modal";
import styles from "../styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faToggleOn,
  faToggleOff,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [settingOn, setSettingOn] = useState(false);

  const handleSettingsClick = (event) => {
    event.preventDefault();
    setSettingOn(!settingOn);
  };

  return (
    <div>
      {settingOn && (
        <Modal title="Settings" onHandleExit={handleSettingsClick}>
          <div className={styles.settingRow}>
            <p>Night Mode</p>
          </div>
          <div className={styles.settingRow}>
            <p>Color Blind Mode</p>
          </div>
        </Modal>
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
