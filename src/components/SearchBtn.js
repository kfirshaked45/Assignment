import { Container, Row, Col } from "react-grid-system";
import "./SearchBtn.css";

import React, { useState } from "react";

function Search() {
  const [searchData, setSearchData] = useState([]);

  const handleClick = () => {
    const getInput = document.getElementById("myinput").value;

    fetch(`https://api.chucknorris.io/jokes/search?query=${getInput}`, {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setSearchData(data);
        console.log(searchData);
      });
  };
  return (
    <div className="div">
      <label>Key word(s)</label>
      <input
        className="input"
        placeholder="e.g. egg,break,Chuck Norris,dumb"
        id="myinput"
      />

      <button type="submit" onClick={handleClick} className="go">
        GO!
      </button>
      <Container fluid className="table">
        <Row align="start" style={{ height: "55px" }}>
          <Col sm={4} className="td">
            ID
          </Col>
          <Col sm={4} className="td">
            Category
          </Col>
          <Col sm={4} className="td">
            Date created
          </Col>
        </Row>
        {"result" in searchData
          ? Object.keys(searchData.result).map((item) => {
              return (
                <Row>
                  <Col sm={4} className="td">
                    {searchData.result[item].id}
                  </Col>
                  <Col sm={4} className="td">
                    {searchData.result[item].categories}
                  </Col>
                  <Col sm={4} className="td">
                    {searchData.result[item].created_at}
                  </Col>
                </Row>
              );
            })
          : null}
      </Container>
    </div>
  );
}

export default Search;
