import {
  TableContainer,
  Table,
//   TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
} from "@mui/material";
import React from "react";
import './Table_data.css'
export const TableforData = () => {
  return (
        <>
      <TableContainer component={Paper}>
      <Table aria-label="simple table" className="tablepostion"> </Table>
      <TableHead>
        <TableCell>Id</TableCell>
        <TableCell>specialization_name</TableCell>
        <TableCell>description"</TableCell>
      </TableHead>
      <TableBody>
        <TableCell>Hi</TableCell>
        <TableCell>data</TableCell>
        <TableCell>here</TableCell>
      </TableBody>
      <TableBody>
        <TableCell>Hi</TableCell>
        <TableCell>data</TableCell>
        <TableCell>here</TableCell>
      </TableBody>
      
    </TableContainer>
        </>
  );
};
export default TableforData;