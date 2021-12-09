import React, { useState, useEffect } from "react";
import MyButton from "./MyButton";
import MySelect from "./MySelect";
import "./CategoriesPage.css";

function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [jokeResponse, setJokeResponse] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setError(false);
      })
      .catch((err) => setError(err.message));
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
        setError(false);
      })
      .catch((err) => setError(err.message));
  };

  const onCategorySelected = (event) => {
    setCategoryInput(event.target.value);
  };

  return (
    <div className="base">
      {error && <h3 className="err">{error}</h3>}
      <div className="input-select-div">
        <label className="custom-name">Your name </label>
        <input
          className="custom-input"
          placeholder=" e.g. Chuck Norris"
          onChange={(event) => {
            setNameInput(event.target.value);
          }}
        />
        <MySelect onChange={onCategorySelected} list={categories}></MySelect>
        <MyButton onClick={handleClick}>GO!</MyButton>
      </div>
      <div className="joke-response">
        {jokeResponse === "" ? null : (
          <h3 className="custom-joke">{jokeResponse.value}</h3>
        )}
      </div>
    </div>
  );
}
export default CategoriesPage;
