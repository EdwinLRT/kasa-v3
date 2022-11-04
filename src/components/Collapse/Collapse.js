import React, { useState } from "react";
import "./Collapse.css";
import arrow from "../../assets/img/Components/Collapse/arrow.svg";

function Collapse({ titre, description }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse" id={`collapse${titre}`}>
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
