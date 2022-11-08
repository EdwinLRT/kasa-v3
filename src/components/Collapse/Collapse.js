import React, { useState } from "react";
import "./Collapse.css";
import arrow from "../../assets/img/Components/Collapse/arrow.svg";

// use of props for title and description
function Collapse({ titre, description }) {
  // state false to display closed collapses by default
  const [open, setOpen] = useState(false);
  return (
    // use of a parameter for the class name to facilitate the identification of collapses in the code
    <div className={`collapse${titre} collapse`}>
      {/* implementation of the onclick to open and close the collapses */}
      <div className="titleBackgroundCollapse" onClick={() => setOpen(!open)}>
        <div className="titleCollapse">{titre}</div>
        <div className={`arrowCollapse ${open}`}>
          <img src={arrow} alt="Ouvrir le conteneur" />
        </div>
      </div>
      {open && <div className="descriptionCollapse">{description}</div>}
    </div>
  );
}

export default Collapse;
