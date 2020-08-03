import React from "react";
import "./style/style.css";

function Nav({ nextBtn, previousBtn }) {
  return (
    <div className="NavBar">
      <h1 className="pageTitle">Pokedex</h1>
      <button className="navBtn" onClick={previousBtn}>
        Previous
      </button>
      <button className="navBtn" onClick={nextBtn}>
        Next
      </button>
    </div>
  );
}

export default Nav;
