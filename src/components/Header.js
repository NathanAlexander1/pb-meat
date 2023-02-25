import React from "react";
import Twitter from "../assets/twitter.png";

function Header() {
  return (
    <div className="sections">
      <h1>Welcome to Fleshtables!</h1>
      <h4>For the plant-based consumer who longs to enjoy human flesh.</h4>
      <h5>From arm to table, we've got you covered!</h5>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/Fleshtable?t=xT0rKnQ-rtnL7fD8GUomTA&s=01"
      >
        <img className = "twitterImg" src={Twitter} alt="Find us on twitter"></img>
      </a>
      <hr />
    </div>
  );
}

export default Header;
