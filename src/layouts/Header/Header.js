import React from "react";
import "./Header.css";
import logoHeader from "../../assets/img/logo-Kasa.svg";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate("/home");
  };

  return (
    <header>
      <img src={logoHeader} alt="Logo" onClick={navigateHome} />
      <nav className="navContainer">
        <NavLink to="/home" className="navLink menu">
          Accueil
        </NavLink>
        <NavLink to="/about" className="navLink menu">
          À propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
