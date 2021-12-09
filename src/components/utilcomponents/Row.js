import React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

function Row(props) {
  const { data } = props;
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <TableRow
        className="custom-row"
        onClick={handleClick}
        sx={{ "& > *": { borderBottom: "unset" } }}
      >
        <TableCell component="th" scope="row" align="left">
          {data.id}
        </TableCell>
        <TableCell align="left">{data.categories}</TableCell>
        <TableCell align="left">
          {new Date(data.created_at).toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
          })}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="p"
                gutterBottom
                component="div"
                className="joke"
              >
                {data.value}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default Row;
