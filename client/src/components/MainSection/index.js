import React from "react";
import classnames from "classnames";
import styles from "./MainSection.module.css";

const MainSection = ({ children, page }) => {
  return (
    <main className={classnames(styles.main, styles[page])}>
      <div className={classnames(styles.container)}>{children}</div>
    </main>
  );
};

export default MainSection;
