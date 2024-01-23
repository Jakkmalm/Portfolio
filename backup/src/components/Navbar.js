import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/projects">
        <p>Projects</p>
      </Link>
      <Link to="/contact">
        <p>Contact</p>
      </Link>
    </nav>
  );
}

export default Navbar;
