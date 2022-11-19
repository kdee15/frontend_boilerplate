import React from "react";
import classes from "./ComponentFooter.module.scss";

function Footer({ contentModule }) {
  const { linkList } = contentModule;
  return (
    <footer className={classes.oFooter}>
      <div className={`container`}>
        <div className={`row`}>
          <nav className={`col-12 col-md-3 footer-col-1`}></nav>
          <nav
            className={`col-12 col-md-5 offset-md-1 col-lg-4 offset-lg-2 footer-col-2`}
          >
            {/* <ul className={`${classes.oFooterList} oFooterMenu`}>
              {linkList.map((item, index) => (
                <li key={index}>{item.fields.text}</li>
              ))}
            </ul> */}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
