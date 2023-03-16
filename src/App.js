import "./App.css";
import React from "react";
import {
  Alert,
  Button,
  ListItem,
  RadioGroup,
  TextField,
  Table,
} from "@mui/material";
import axios from "axios";
import {
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import NavBar from "./NavBAr";
import DataTable from "./Demo_greed";
import TableforData from "./Table_data";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Demo_greed" element={<DataTable />}></Route>
          <Route path="/Table_data" element={<TableforData />}></Route>
        </Routes>
      </BrowserRouter>

      {/* 
      <p>{JSON.stringify(store)}</p> */}
    </>
  );
}

export default App;
