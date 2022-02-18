import React, { useState } from "react";
import Modal from "../UI/Modal";
import ToggleSwitch from "../UI/ToggleSwitch";
import styles from "../styles/SettingsModal.module.css";

const SettingsModal = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const [colorBlindMode, setColorBlindMode] = useState(false);

  return (
    <div>
      <Modal title="Settings" onHandleExit={props.onCloseSetting}>
        <div className={styles.settingRow}>
          <p>Night Mode</p>
          <ToggleSwitch
            isOn={darkMode}
            handleToggle={() => setDarkMode(!darkMode)}
            id={"darkMode"}
          />
        </div>
        <div className={styles.settingRow}>
          <p>Color Blind Mode</p>
          <ToggleSwitch
            isOn={colorBlindMode}
            handleToggle={() => setColorBlindMode(!colorBlindMode)}
            id={"colorBlindMode"}
          />
        </div>
      </Modal>
    </div>
  );
};

export default SettingsModal;
