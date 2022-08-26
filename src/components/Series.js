import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, TextField } from "@mui/material";

function createData(name, status) {
  return { name, status };
}

const rows = [
  createData("Film1", "watched"),
  createData("Serie1", "half"),
  createData("Film2", "watched"),
  createData("Film3", "not"),
  createData("Serie2", "watched"),
  createData("Serie1", "half"),
];

export default function Series() {
  return (
    <Box>
      <input
        type="text"
        value="search"
        style={{
          border: "none",
          backgroundColor: "transparent",
          color: "#ffffff",
          borderBottom: "1px solid #ffffff",
        }}
      />
      <TableContainer
        component={Paper}
        sx={{ minWidth: 300, maxWidth: 650, backgroundColor: "#0c0c0c" }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#0F33FF", textTransform: "uppercase" }}>
                Name
              </TableCell>

              <TableCell
                align="left"
                sx={{ color: "#0F33FF", textTransform: "uppercase" }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ color: "#ffffff" }}>
                  {row.name}
                </TableCell>

                <TableCell
                  align="left"
                  sx={
                    row.status === "not"
                      ? { color: "red" }
                      : null || row.status === "half"
                      ? { color: "orange" }
                      : null || row.status === "watched"
                      ? { color: "green" }
                      : null
                  }
                >
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
