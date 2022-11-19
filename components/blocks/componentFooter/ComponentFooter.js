import React from "react";
import classes from "./ComponentFooter.module.scss";

function Footer() {
  return (
    <footer className={`${classes.oFooter} oFooter`}>
      <div className={`container`}>
        <div className={`row`}>
          <nav className={`col-12 col-md-3 footer-col-1`}>LINK</nav>
          <nav
            className={`col-12 col-md-5 offset-md-1 col-lg-4 offset-lg-2 footer-col-2`}
          >
            LINK
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
