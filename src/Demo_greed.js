import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { height, width } from "@mui/system";

const rows = [
  { id: 1, col1: 'Hello', col2: "world"},
  { id: 2, col1: "Hi", col2: "world" },
  { id: 3, col1: "How are you", col2: "world" },
  { id: 4, col1: "How are you", col2: "world" },
  { id: 5, col1: "How are you", col2: "world" },
  { id: 6, col1: "How are you", col2: "world" },
  { id: 7, col1: "How are you", col2: "world" },
  { id: 8, col1: "How are you", col2: "world" },
  { id: 9, col1: "How are you", col2: "world" },
  { id: 10, col1: "How are you", col2: "world" },
  { id: 11, col1: "How are you", col2: "world" },
  { id: 12, col1: "How are you", col2: "world" },
  { id: 13, col1: "How are you", col2: "world" },
];

const columns = [{ field: 'id', headerName: 'id',width: 150 },{ field: 'col1', headerName: 'name',width: 150}, { field: "col2", headerName: 'lastname',width: 150  }];
const DataTable = () => {
  return (
    <div style={{ marginTop: 150, width:700, marginLeft:200}}>
      <DataGrid rows ={rows} columns={columns} autoHeight/>
    </div>
  );
};
export default DataTable;
