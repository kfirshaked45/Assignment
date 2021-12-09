import React, { useState } from "react";
import SearchPage from "./utilcomponents/SearchPage";
import CategoriesPage from "./utilcomponents/CategoriesPage";
import classNames from "classnames";
import "./SwitchComponent.css";

function SwitchComponent() {
  const [showRandom, setShowRandom] = useState(true);

  const onClickRandom = () => {
    setShowRandom(true);
  };

  const onClickSearch = () => {
    setShowRandom(false);
  };

  const searchClassNames = classNames("search-button", {
    "clicked-right": !showRandom,
  });

  const randomClassNames = classNames("random-button", {
    "clicked-left": showRandom,
  });

  return (
    <div className="mid">
      <ul className="ul">
        <li>
          <button className={randomClassNames} onClick={onClickRandom}>
            Random
          </button>
          <button className={searchClassNames} onClick={onClickSearch}>
            Search
          </button>
        </li>
        {showRandom ? <h2>{<CategoriesPage />}</h2> : null}
        {!showRandom ? <h2>{<SearchPage />}</h2> : null}
      </ul>
    </div>
  );
}

export default SwitchComponent;
