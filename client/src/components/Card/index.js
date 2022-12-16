import React from "react";
import classnames from "classnames";
import styles from "./Card.module.css";

const Card = ({ title, text, link, image, component }) => {
  return (
    <div
      className={classnames(styles.card, styles[component])}
      style={{ backgroundImage: `${image}` }}
    >
      <div className={classnames(styles.inner)}>
        <a className={classnames(styles.link)} href={link}>
          <h3 className={classnames(styles.title)}>{title}</h3>
          <p className={classnames(styles.text)}>{text}</p>
          <div className={classnames(styles.layer)}></div>
        </a>
      </div>
    </div>
  );
};

export default Card;
