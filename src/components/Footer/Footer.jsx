import React from "react";
import { Link } from "react-router-dom";

import { routes } from "../../utils/routes";
import styles from "../../styles/Footer.module.css";
import Logo from "../../images/QUAD_BIG.svg";

const Footer = () => (
  <section className={styles.footer}>
    <div className={styles.logo}>
      <Link to={routes.Home}>
        <img src={Logo} alt="Quad" />
      </Link>
    </div>

    <div className={styles.rights}>
      Developed by{" "}
      <a
        href="https://instagram.com/mandaji91?igshid=MzRlODBiNWFlZA=="
        target="_blank"
        rel="noreferrer"
      >
        Mandaji Dmitri
      </a>
    </div>

    <div className={styles.socials}>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
        </svg>
      </a>

      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
        </svg>
      </a>

      <a href="https://youtube.com" target="_blank" rel="noreferrer">
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
        </svg>
      </a>
    </div>
  </section>
);

export default Footer;
