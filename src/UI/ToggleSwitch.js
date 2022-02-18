import React from "react";
import styles from "./ToggleSwitch.module.css";

const ToggleSwitch = (props) => {
  return (
    <>
      <input
        checked={props.isOn}
        onChange={props.handleToggle}
        className={styles["react-switch-checkbox"]}
        id={props.id}
        type="checkbox"
      />
      <label
        style={{ background: props.isOn && "#06D6A0" }}
        className={styles["react-switch-label"]}
        htmlFor={props.id}
      >
        <span className={styles["react-switch-button"]} />
      </label>
    </>
  );
};

export default ToggleSwitch;
