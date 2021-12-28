import React from "react";
import styles from "../styles/About.module.css";
import { Link } from "react-router-dom";
import profilepic from "../images/profile-photo-warm.jpg";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutdiv}>
        <div
          className={`${styles["flex-column"]} ${styles["margin-v-20px"]} ${styles.two}`}
        >
          <h1>Hello. Hola. 你好。</h1>
          <p className={styles["line-height-large"]}>
            Hi! My name is Nicolle and I'm a software engineer in the SF Bay
            Area. I'm deeply interested in using technology for social good, web
            development, and big data. I recently graduated from UC Santa Cruz
            with a B.S. in Computer Science, where I was president for the
            Society of Women Engineers and worked as a peer staff for the MESA
            Engineering Program. When I am not coding, I love to hike, travel,
            and take photos.
          </p>
          <p
            className={`${styles["line-height-large"]} ${styles["small-text"]}`}
          >
            Fun fact: I'm bi-lingual (English and Spanish), and learning
            Mandarin Chinese.
          </p>
          <div className={`${styles["flex-row-center"]} ${styles["btn-div"]}`}>
            <Link to="/resume" className={styles.btnWineRed}>
              resume
            </Link>
          </div>
        </div>
        <div
          className={`${styles["flex-column"]} ${styles["image-container"]} ${styles.one}`}
        >
          <img
            src={profilepic}
            className={styles["profile-pic"]}
            alt="Nicolle Ayon smiling"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
