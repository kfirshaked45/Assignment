import React, { useState } from "react";
import "./SearchPage.css";
import Tablegrid from "./Table";

function SearchPage() {
  const [searchData, setSearchData] = useState([]);
  const [input, setInput] = useState("");

  const handleClick = () => {
    fetch(`https://api.chucknorris.io/jokes/search?query=${input}`, {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        const newData = Object.keys(data.result).map(
          (item) => data.result[item]
        );
        setSearchData(newData);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="box-div">
        <label className="custom-label">Key word(s)</label>
        <input
          className="custom-input"
          placeholder="e.g. egg,break,Chuck Norris,dumb"
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit" onClick={handleClick} className="custom-button">
          GO!
        </button>
      </div>
      <Tablegrid data={searchData} />
    </>
  );
}

export default SearchPage;
