import React from "react";
import DarkMode from "./DarkMode/DarkMode";

const Header = () => {
  return (
    <div className="headerContainer">
      <h1>Anime Corner</h1>
      <div className="DarkMode">
        <DarkMode />
      </div>
    </div>
  );
};

export default Header;
