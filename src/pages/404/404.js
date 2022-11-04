import React from "react";
import "./404.css";
import { NavLink } from "react-router-dom";

function Erreur404() {
  return (
    <div className="Error404">
      <h1 className="Error404Title">404</h1>
      <span className="Error404Description">
        Oups! La page que vous demandez n'existe pas.
      </span>
      <NavLink to="/home" className="linkTo linkToError404">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
}

export default Erreur404;
