import React from "react";

import Card from "./Card";

import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div>
      <div className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>{props.children}</div>
        <footer className={styles.actions}>
          <div className={`${styles["btn"]}`}>Done</div>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;
