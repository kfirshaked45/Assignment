import React from "react";
import "./MyButton.css";

function MyButton(props) {
  const { onClick } = props;
  return (
    <div>
      <button type="submit" className="button" onClick={onClick}>
        GO!
      </button>
    </div>
  );
}
export default MyButton;
