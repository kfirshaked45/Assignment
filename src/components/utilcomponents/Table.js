import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Row from "./Row";
import classNames from "classnames";
import down from "../svgs/down.svg";
import button from "../svgs/button.svg";
import "./Table.css";

function Tablegrid(props) {
  const { data } = props;
  const [items, setItems] = useState([]);
  const [sortOption, setSortOption] = useState("");
  useEffect(() => {
    setItems(data);
  }, [data]);
  const ArrowUpClassNames = classNames("custom-filter", {
    "custom-ascending": sortOption === "ascending",
  });

  const sortByDate = () => {
    if (sortOption === "descending") {
      const ascendingDates = items.sort((a, b) => {
        return new Date(a.created_at) - new Date(b.created_at);
      });

      setItems(ascendingDates);
      setSortOption("ascending");
    } else {
      const descendingDates = items.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      setItems(descendingDates);
      setSortOption("descending");
    }
  };
  return (
    <div className="custom-table">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">
              ID <img src={down} alt="down" className="custom-down"></img>
            </TableCell>
            <TableCell align="left">
              Categories{" "}
              <img src={down} alt="down" className="custom-down"></img>
            </TableCell>
            <TableCell align="left" onClick={sortByDate}>
              Date <img src={down} className="custom-down" alt="down"></img>
              <img src={button} className={ArrowUpClassNames} alt="arrow"></img>
            </TableCell>
          </TableRow>
        </TableHead>
        {data.length > 0 &&
          data.map((item) => {
            return <Row data={item} />;
          })}
      </Table>
    </div>
  );
}
export default Tablegrid;
