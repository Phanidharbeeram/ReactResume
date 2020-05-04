import React from "react";
import styles from "./Homepage.module.css";
import myintropic from "../../Images/Dslr2.jpeg";
// import mountain from "../../Images/mountain.png";
export default function Homepage() {
  return (
    <div className={styles.mainpage}>
      {/* <img className={styles.intro} src={mountain} alt="mountain" /> */}

      <div className={styles.h1}>
        <h1>HI,I am Phanidhar Beeram. A FullStack Developer From Hyderabad.</h1>
      </div>

      <img className={styles.intro} src={myintropic} alt="my Intro" />
    </div>
  );
}
