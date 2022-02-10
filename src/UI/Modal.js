import React from "react";

import Card from "./Card";
import styles from "./Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onHandleExit}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title} </h2>
          <button className={`${styles["btn"]}`} onClick={props.onHandleExit}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </header>
        <div className={styles.content}>{props.children}</div>
      </Card>
    </div>
  );
};

export default Modal;
