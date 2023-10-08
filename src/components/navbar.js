import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="title2" to="/">
        Home
      </Link>

      <Link className="title2" to="/Anime">
        Anime
      </Link>

      <Link className="title2" to="/Manga">
        Manga
      </Link>

      <Link className="title2" to="/About">
        About
      </Link>
    </div>
  );
};

export default Navbar;
