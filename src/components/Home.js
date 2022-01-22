import React from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import styles from "../styles/Home.module.css";
import computerCodeImg from "../images/computer-code.png";
import portfolioproject from "../images/project-portfolio.png";
import clubsforslugs from "../images/project-clubsforslugs.png";
import aedsimulator from "../images/project-aedsimulator.png";
import shapesbg from "../images/shapes-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faLaptopCode,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles["hero-img"]}>
          <img
            className={styles["img-width"]}
            src={computerCodeImg}
            alt="Desktop with lines of code"
          />
        </div>

        <div className={styles["flex-column"]}>
          <h2 className={styles["no-margin"]}>
            <span className={styles.chalkyBlue}> Hello,</span> I'm Nicolle.
          </h2>
          <h1 className={styles["margin-v-20px"]}>
            Software Engineer <span className={styles.sunnyYellow}> & </span>
            Creative
          </h1>
          <div className={styles["flex-row-center"]}>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className={styles["margin-right-5px"]}
            />
            <h3 className={styles["margin-v-10px"]}>
              SF Bay Area, California{" "}
            </h3>
          </div>
          <div className={styles["flex-row-center"]}>
            <FontAwesomeIcon
              icon={faLaptopCode}
              className={styles["margin-right-5px"]}
            />
            <h3 className={styles["margin-v-10px"]}>
              Currently writing code at{" "}
              <a href="https://www.cognizant.com/us/en" id={styles.Cognizant}>
                Cognizant
              </a>
            </h3>
          </div>
          <div className={styles["flex-row-center"]}>
            <FontAwesomeIcon
              icon={faCode}
              className={styles["margin-right-5px"]}
            />
            <h3 className={styles["margin-v-10px"]}>
              Learning: <i>React, Node.js, Springboot</i>{" "}
            </h3>
          </div>
          <div className={`${styles["flex-row-center"]} ${styles["btn-div"]}`}>
            <Link to="/about-me" className={styles.btnYellow}>
              more ...
            </Link>
          </div>
        </div>
      </section>

      <section className={styles["new-section"]}>
        <div className={styles["section-title"]}> projects</div>
        <div className={styles.underline}> </div>
        <div className={styles["card-container"]}>
          <Card>
            <h2>Portfolio</h2>
            <div className={styles["image-container"]}>
              <a href="https://github.com/nicolleayon/nicolle-ayon-portfolio">
                <img
                  className={styles["card-project-img"]}
                  src={portfolioproject}
                  alt="Screenshot of Portfolio Project"
                />
              </a>
            </div>
            <p>
              React website portfolio to showcase projects and resume created
              via create-react-app.
            </p>
            <p className={`${styles["small-text"]}`}>React, hosted on AWS S3</p>
            <p className={`${styles["small-text"]}`}>
              Github:{" "}
              <a
                href="https://github.com/nicolleayon/nicolle-ayon-portfolio"
                target="_blank"
                rel="noreferrer"
              >
                nicolle-ayon-portfolio
              </a>
            </p>
          </Card>
          <Card>
            <h2>Garden Market</h2>
            <div className={styles["word-overlay-container"]}>
              <a href="https://github.com/nicolleayon/garden-market">
                <img
                  className={styles["card-project-img"]}
                  src={shapesbg}
                  alt="background with shapes"
                />
              </a>
              <div className={styles["center-text-overlay"]}>
                <a href="https://github.com/nicolleayon/garden-market">
                  <h3>No Demo Available</h3>
                </a>
              </div>
            </div>
            <p> Market for gardeners to sell homegrown fruits and veggies.</p>
            <p className={`${styles["small-text"]}`}>React</p>
            <p className={`${styles["small-text"]}`}>
              Github:{" "}
              <a
                href="https://github.com/nicolleayon/garden-market"
                target="_blank"
                rel="noreferrer"
              >
                garden-market
              </a>
            </p>
          </Card>
          <Card>
            <h2>NOM</h2>
            <div className={styles["word-overlay-container"]}>
              <a href="https://github.com/nicolleayon/NOM">
                <img
                  className={styles["card-project-img"]}
                  src={shapesbg}
                  alt="background with shapes"
                />
              </a>
              <div className={styles["center-text-overlay"]}>
                <a href="https://github.com/nicolleayon/NOM">
                  <h3>No Demo Available</h3>
                </a>
              </div>
            </div>
            <p>
              Connect students to other students to be able to exchange dining
              hall passes.
            </p>
            <p className={`${styles["small-text"]}`}>
              React / Firebase (Class project)
            </p>
            <p className={`${styles["small-text"]}`}>
              Github:{" "}
              <a
                href="https://github.com/nicolleayon/NOM"
                target="_blank"
                rel="noreferrer"
              >
                NOM
              </a>
            </p>
          </Card>
          <Card>
            <h2>myPhotos</h2>
            <div className={styles["word-overlay-container"]}>
              <img
                className={styles["card-project-img"]}
                src={shapesbg}
                alt="background with shapes"
              />

              <div className={styles["center-text-overlay"]}>
                <h3>No Demo Available</h3>
              </div>
            </div>
            <p>Allows users to upload and store photos</p>
            <p className={`${styles["small-text"]}`}>React / Spring Boot</p>
            <p className={`${styles["small-text"]}`}>
              Github: Private (due to company policy)
            </p>
          </Card>
          <Card>
            <h2>AEDSimulator</h2>
            <div className={styles["image-container"]}>
              <a
                href="https://nicolleayon.github.io/AEDSimulator/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles["card-project-img"]}
                  src={aedsimulator}
                  alt="Screenshot of Project AED Simulator Home Page"
                />
              </a>
            </div>
            <p>Website to find AED devices on the UC Santa Cruz campus.</p>
            <p className={`${styles["small-text"]}`}>
              HTML, CSS, Javascript (Hackathon project)
            </p>
            <p className={`${styles["small-text"]}`}>
              Github:{" "}
              <a
                href="https://github.com/nicolleayon/AEDSimulator"
                target="_blank"
                rel="noreferrer"
              >
                AEDSimulator
              </a>
            </p>
          </Card>
          <Card>
            <h2>Clubs for Slugs</h2>
            <div className={styles["image-container"]}>
              <a
                href="https://nicolleayon.github.io/clubs-for-slugs/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles["card-project-img"]}
                  src={clubsforslugs}
                  alt="Screenshot of Project Clubs for Slugs Home Page"
                />
              </a>
            </div>
            <p> Website for UC Santa Cruz campus clubs. </p>
            <p className={`${styles["small-text"]}`}>
              HTML, CSS, Javascript (Hackathon project)
            </p>
            <p className={`${styles["small-text"]}`}>
              Github:{" "}
              <a
                href="https://github.com/nicolleayon/clubs-for-slugs"
                target="_blank"
                rel="noreferrer"
              >
                clubs-for-slugs
              </a>
            </p>
            <p className={`${styles["small-text"]}`}></p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
