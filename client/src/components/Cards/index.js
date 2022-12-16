import React from "react";
import classnames from "classnames";
import styles from "./Cards.module.css";

const Cards = ({ children }) => {
  return <section className={classnames(styles.cards)}>{children}</section>;
};

export default Cards;
