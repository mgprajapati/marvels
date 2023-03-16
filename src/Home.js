import {
  Alert,
  Button,
  ListItem,
  RadioGroup,
  TextField,
  Table,
  Snackbar,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import Validation from "./Validation";
const Home = () => {
  // const [err, setErr] = React.useState(false);

  const [input, setInput] = React.useState({
    fName: "",
    lName: "",
    password: "",
    email: "",
  });

  let [store, setStore] = React.useState([]);

  let addNewItem = () => {
    setStore([...store, input]);
  };

  const userget = (e) => {
    // let errmsg;
    setInput({ ...input, [e.target.name]: e.target.value });
    // debugger;
    // if(e.target.value.length <= 4 )
    // {
    //   setErr(true);
    // }
    // else{
    //   setErr(false);
    // }

    console.log(input);
  };
  //fetch api

  function submit(h) {
    h.preventDefault();
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => setStore(response.data.bpi));
  }

  //error msg function
  const [errMsg, setErrMsg] = React.useState({});

  const [green, setGreen] = React.useState({
    type: "success",
    msg: "Data Stored",

  });
  const errHandel = (i) => {
    //debugger;
    i.preventDefault();
    const err = Validation(input);
    setErrMsg(err);
    // else if(!err.lName){
    //   setSuc(true);
    // }
    // else if(!err.email){
    //   setSuc(true);
    // }
    // else if(!err.password){
    //   setSuc(true);
    // }
    if (err.fName) {
      setGreen({type: "error", msg: "wrong"})
      setOpen(true);
    } else if (err.lName) {
      setGreen({type: "error", msg: "wrong"})
      setOpen(true);
    } else if (err.email) {
      setOpen(true);
    } else if (err.password) {
      setOpen(true);
    }
    if (!err.fName && !err.lName && !err.email && !err.password) {
      setGreen({type: "success", msg: "Data submited"})
      setOpen(true);
    }
  };

  const [open, setOpen] = React.useState(false);
  const [suc, setSuc] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setSuc(false);
  };

  return (
    <>
      <div>
        <div className="first-form">
          <h1>Home Page Demo</h1>
          <h1>Form</h1>
          <form onSubmit={errHandel}>
            <TextField
              id="standard-textarea"
              name="fName"
              label="firstname"
              //placeholder="Firstname"
              // multiline
              // variant="standard"
              onChange={userget}
              value={input.fName}
              error={!input.fName}
            />
            {errMsg.fName && <p style={{ color: "red" }}>{errMsg.fName}</p>}
            <br />
            <br />
            <TextField
              id="standard-textarea"
              name="lName"
              label="lastname"
              // placeholder="lastname"
              // multiline
              // variant="standard"
              onChange={userget}
              value={input.lName}
              error={!input.lName}
            />{" "}
            {errMsg.lName && <p style={{ color: "red" }}>{errMsg.lName}</p>}
            <br />
            <br />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              name="password"
              onChange={userget}
              value={input.password}
              error={!input.password}
            />
            {errMsg.password && (
              <p style={{ color: "red" }}>{errMsg.password}</p>
            )}
            <br />
            <br />
            <TextField
              id="outlined-password-input"
              label="Email"
              type="email"
              autoComplete="current-password"
              name="email"
              onChange={userget}
              value={input.email}
              error={!input.email}
            />
            {errMsg.email && <p style={{ color: "red" }}>{errMsg.email}</p>}
            <br />
            <br />
            <Button variant="outlined" type="submit">
              Submit
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                 severity={green.type}
                // severity="success"
                sx={{ width: "100%" }}
              >
                {green.msg}
              </Alert>
            </Snackbar>
            {/* <Snackbar open={suc} autoHideDuration={5000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                This is a success!
              </Alert>
            </Snackbar> */}
          </form>
        </div>

        {/* <p>{JSON.stringify(store)}</p> */}
      </div>
    </>
  );
};

export default Home;
