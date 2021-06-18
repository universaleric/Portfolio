import React from "react";
import "./style.css";

const styles = {
  headingStyle: {
    fontSize: 50,
  },
  subHeadingStyle: {
    fontSize: 25,
  },
};

function Header() {
  return (
    <header className="header">
      <h1 style={styles.headingStyle}>eric hay</h1>
      <h3 style={styles.subHeadingStyle}>professional resume</h3>
    </header>
  );
}

export default Header;
