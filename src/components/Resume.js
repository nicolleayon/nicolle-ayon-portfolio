import React from "react";
import styles from "../styles/Resume.module.css";
import nicolleResume from "../files/AyonCampos_Nicolle.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const Resume = () => {
  return (
    <div className={styles.container}>
      <section>
        <h1 className={styles["text-align-center"]}>Nicolle Ayon Campos</h1>
        <div className={`${styles["flex-row-center"]} ${styles["btn-div"]}`}>
          <a
            href={nicolleResume}
            className={`${styles.btnLimeGreen} ${styles["btnMedium"]}`}
            download
          >
            <FontAwesomeIcon
              icon={faDownload}
              className={styles["margin-right-10px"]}
            />
            download resume
          </a>
        </div>
        <div className={styles["social-media-header"]}>
          <div>
            <FontAwesomeIcon
              icon={faEnvelope}
              className={styles["margin-right-10px"]}
            />
            <a
              className={styles["link-text"]}
              href="mailto: nicolleayon@gmail.com"
            >
              nicolleayon@gmail.com
            </a>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faEnvelope}
              className={styles["margin-right-10px"]}
            />
            <a
              className={styles["link-text"]}
              href="mailto: nicolle.ayoncampos@cognizant.com"
            >
              nicolle.ayoncampos@cognizant.com
            </a>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className={styles["margin-right-10px"]}
            />
            <a
              className={styles["link-text"]}
              href="https://www.linkedin.com/in/nicolleayon/"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faGithub}
              className={styles["margin-right-10px"]}
            />
            <a
              className={styles["link-text"]}
              href="https://github.com/nicolleayon"
            >
              Github
            </a>
          </div>
        </div>
        <div className={styles.bar}></div>
      </section>

      <section>
        <h2 className={styles["margin-top"]}>Education</h2>
        <div className={styles.entry}>
          <h3>B.S. Computer Science</h3>
          <p>University of California, Santa Cruz | 2016-2020</p>
        </div>
      </section>

      <section>
        <h2 className={styles["margin-top"]}>Skills</h2>
        <div className={styles.entry}>
          <p>
            <b>Programming Languages: </b>Java, HTML, CSS, JavaScript, React,
            Node.js &nbsp;&nbsp;&nbsp;&nbsp;
            <b>Familiar with: </b>C++, SQL, Angular, Firebase
          </p>
        </div>
        <div className={styles.entry}>
          <p>
            <b>Software Tools: </b>Git, LaTeX, Unix, Postman
          </p>
        </div>
        <div className={styles.entry}>
          <p>
            <b>Training and Certifications: </b>Typescript (Udemy), AWS
            Serverless APIs & Apps (Udemy), Java Basic (HackerRank)
          </p>
        </div>
      </section>

      <section>
        <h2 className={styles["margin-top"]}>Experience</h2>
        <div className={styles.entry}>
          <h3>Full Stack Engineer</h3>
          <p>Cognizant | June 2021 - present</p>
          <ul>
            <li>
              Developed website projects in React, Typescript, Node.js, Spring
              Boot, HTML, CSS, and JavaScript
            </li>
            <li>
              Collaborate on a social media website clone project for enablement
              project using React Hooks and Bootstrap
            </li>
          </ul>
        </div>
        <div className={styles.entry}>
          <h3>Research Assistant</h3>
          <p>Tech4Good Research Lab | April 2018 - June 2019</p>
          <ul>
            <li>
              Collaborated on an 8-person team to perfect the design and test
              the structure of undergrad reading groups through gathering data
              by conducting surveys and interviews over a period of multiple
              phases
            </li>
            <li>
              Analyzed data using several qualitative methods to understand
              participant satisfaction and retention
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className={styles["margin-top"]}>Projects</h2>
        <div className={styles.entry}>
          <h3>
            <i>Please see home page or resume</i>
          </h3>
        </div>
      </section>

      <div
        className={`${styles["flex-row-left"]} ${styles["margin-top-40px"]}`}
      >
        <a
          href={nicolleResume}
          className={`${styles.btnLimeGreen} ${styles.btnLarge}`}
          download
        >
          <FontAwesomeIcon
            icon={faDownload}
            className={styles["margin-right-10px"]}
          />
          download resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
