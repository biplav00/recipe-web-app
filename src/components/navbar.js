import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="menu" to="/">
        Home
      </Link>
      <Link to="/createRecipe">Create Recipe</Link>
      <Link to="/savedRecipe">Saved Recipe</Link>
      <Link to="/auth">Login/ Register</Link>
    </div>
  );
};

export default Navbar;
