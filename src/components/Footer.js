import React from "react";
import styles from "../styles/Footer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.bar}></div>
      <div className={styles["footer-contents"]}>
        <div className={styles["social-media-container"]}>
          <a
            className={styles["footer-text"]}
            href="https://www.linkedin.com/in/nicolleayon/"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className={styles["margin-right-5px"]}
            />
            LinkedIn
          </a>
          <a
            className={styles["footer-text"]}
            href="https://github.com/nicolleayon"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className={styles["margin-right-5px"]}
            />
            Github
          </a>
          <a
            className={styles["footer-text"]}
            href="mailto: nicolleayon@gmail.com"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className={styles["margin-right-5px"]}
            />
            Email
          </a>
        </div>

        <p className={styles["small-text"]}>
          {" "}
          Made with{"  "}
          <FontAwesomeIcon
            icon={faHeart}
            className={styles["margin-right-5px"]}
          />{" "}
          &copy; Nicolle Ayon
        </p>
      </div>
    </div>
  );
};

export default Footer;
