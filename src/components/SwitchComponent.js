import React, { useState } from "react";

import "./SwitchComponent.css";
import RandomBtn from "./RandomBtn";
import SearchBtn from "./SearchBtn";

function SwitchComponent() {
  const [showRandom, setShowRandom] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const onClickRandom = () => {
    setShowRandom(!showRandom);
    setShowSearch(false);
    const newClass = document.getElementById("random");
    newClass.className = "clicked-left";
    const oldClass = document.getElementById("search");
    oldClass.className = "search";
  };
  const onClickSearch = () => {
    setShowRandom(false);
    setShowSearch(!showSearch);
    const name = document.getElementById("search");
    name.className = "clicked-right";
    const oldClass = document.getElementById("random");
    oldClass.className = "random";
  };

  return (
    <div className="mid">
      <ul>
        <li>
          <button className="random" onClick={onClickRandom} id="random">
            Random
          </button>
          <button className="search" onClick={onClickSearch} id="search">
            Search
          </button>
        </li>
        {showRandom ? <h2>{<RandomBtn />}</h2> : null}
        {showSearch ? <h2>{<SearchBtn />}</h2> : null}
      </ul>
    </div>
  );
}

export default SwitchComponent;
