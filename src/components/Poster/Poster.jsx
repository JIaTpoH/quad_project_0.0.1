import React from 'react'

import styles from "../../styles/Home.module.css";
import Stels from "../../images/CFORCE.png";


const Poster = () => (
  <section className={styles.home}>
    <div className={styles.title}>NEW QUAD</div>
    <div className={styles.product}>
      <div className={styles.text}>
        <div className={styles.subtitle}>the best of the best</div>
        <h1 className={styles.head}>Stels ATV 850 GUEPARD TROPHY TE 2.0</h1>
        <button className={styles.button}>Shop Now</button>
      </div>
      <div className={styles.image}>
        <img src={Stels} alt="" />
      </div>
    </div>
  </section>
);

export default Poster;
