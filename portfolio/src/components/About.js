import React from "react";
import styles from "../styles/About.module.css";
import codeInProgressImg from "../images/CodeInProgress.png";
const About = () => {
  return (
    <div>
      <h1>Hmm...something is going on here...</h1>
      <img
        src={codeInProgressImg}
        alt="Yellow Diamond 'code in progress' sign"
      />
    </div>
  );
};

export default About;
