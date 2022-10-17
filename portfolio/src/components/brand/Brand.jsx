import React from "react";
import "./brand.css";
import {
  teamenergo,
  robroy,
  carpediem,
  montekarlo,
  mrstefanbraun,
} from "./imports";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <a href="http://www.teamenergo.rs" target="blanc">
          <img src={teamenergo} alt="Teamenergo" />
        </a>
      </div>
      <div>
        <a href="http://www.robroy1884.rs" target="blanc">
          <img src={robroy} alt="Rob-Roy" />
        </a>
      </div>
      <div>
        <a href="http://www.carpediemcentar.rs" target="blanc">
          <img src={carpediem} alt="Carpediem" />
        </a>
      </div>
      <div>
        <a href="http://www.montekarlo.rs" target="blanc">
          <img src={montekarlo} alt="Montekarlo na Drini" />
        </a>
      </div>
      <div>
        <a href="http://www.mrstefanbraun.rs" target="blanc">
          <img src={mrstefanbraun} alt="Mr Stefan Braun" />
        </a>
      </div>
    </div>
  );
};

export default Brand;
