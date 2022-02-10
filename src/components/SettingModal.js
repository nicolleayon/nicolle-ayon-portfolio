import React, { useState } from "react";
import Modal from "../UI/Modal";

import styles from "../styles/SettingsModal.module.css";

const SettingsModal = (props) => {
  return (
    <div>
      <Modal title="Settings" onHandleExit={props.onCloseSetting}>
        <div className={styles.settingRow}>
          <p>Night Mode</p>
        </div>
        <div className={styles.settingRow}>
          <p>Color Blind Mode</p>
        </div>
      </Modal>
    </div>
  );
};

export default SettingsModal;
