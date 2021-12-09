import React from "react";
import "./MySelect.css";

function MySelect(props) {
  const { onChange } = props;
  const { list } = props;
  return (
    <div className="select-div">
      <label className="custom-category-label">Category </label>
      <select onChange={onChange} className="custom-select">
        <option>Please pick a category</option>
        {list.map((category, index) => {
          return <option key={index}>{category}</option>;
        })}
      </select>
    </div>
  );
}
export default MySelect;
