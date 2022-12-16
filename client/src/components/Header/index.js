import React from "react";
import classnames from "classnames";

import Menu from "../Menu";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={classnames(styles.header)}>
        <div className={classnames(styles.container)}>
          <Menu></Menu>
          <a
            class="support support_black header__support"
            href="https://github.com/wildfrui/LandingPodolsk"
            target="_blank"
          >
            Поддержать проект
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
