import React, { useState, useEffect } from "react";
import "./RandomBtn.css";

function RandomBtn() {
  const [apiCategory, setApiCategory] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [jokeResponse, setJokeResponse] = useState([]);
  const [showJoke, setShowJoke] = useState(false);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setApiCategory(data);
      });
  }, []);
  const handleClick = () => {
    fetch(
      `https://api.chucknorris.io/jokes/random?name=${nameInput}&category=${categoryInput}`,
      {
        headers: { "Content-Type": "application/json" },
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setJokeResponse(data);
        setShowJoke(true);
      });
  };

  return (
    <div className="base">
      <label>Your name </label>
      <input
        placeholder=" e.g. Chuck Norris"
        onChange={(event) => {
          setNameInput(event.target.value);
        }}
      />
      <label> Category</label>
      <select
        onChange={(event) => {
          setCategoryInput(event.target.value);
        }}
      >
        <option className="fcategory" value=""></option>
        {apiCategory.map((category) => {
          return <option>{category}</option>;
        })}
        :
      </select>
      <button type="submit" onClick={handleClick} className="go">
        GO!
      </button>
      <div className="jokeresponse">
        {showJoke ? <h3 className="joke">{jokeResponse.value}</h3> : null}
      </div>
    </div>
  );
}
export default RandomBtn;
