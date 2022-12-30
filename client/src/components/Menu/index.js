import React from "react";
import classnames from "classnames";
import styles from "./Menu.module.css";

const Menu = ({ mix }) => {
  return (
    <>
      <div className={classnames(styles.menu, styles[mix])}>
        <a className={classnames(styles.link)} href="">
          ИСТОРИИ
        </a>
        <a className={classnames(styles.link)} href="">
          СОБЫТИЯ
        </a>
        <a className={classnames(styles.link)} href="">
          КАРТА
        </a>
        <a className={classnames(styles.link)} href="">
          ПРОЕКТ
        </a>
      </div>
    </>
  );
};

export default Menu;
