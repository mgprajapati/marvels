import axios from "axios";
import React, { useState } from "react";
import { Button, Snackbar } from "@mui/material";

const Contact = () => {
  let [store, setStore] = React.useState([]);

  const [input, setInput] = React.useState({
    fName: "",
    lName: "",
  });
  let addNewItem = () => {
    setStore([...store, input]);
  };

  function submit(h) {
    h.preventDefault();
    axios
      .get("https://archive.org/metadata/TheAdventuresOfTomSawyer_201303")
      .then((response) => {
        setStore(response.data.files);
        console.log(response);
      });
      
  }

  //delete array object data delete
  const deleteData = (obj) => {
    //d.preventDefault();
    alert(obj);
    const newObj = store.filter((objs) => objs !== obj);
    console.log(newObj);
    setStore(newObj);
  };


  return (
    <>
      <h1>Contact</h1>
      <Button variant="outlined" onClick={submit}>
        Submit
      </Button>
   


      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>source</th>
              <th>format</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {store.length > 0 &&
              store.map((obj, index) => (
                <tr key={index}>
                  <td>{obj.name}</td>
                  <td>{obj.source}</td>
                  <td>{obj.format}</td>
                  <td>
                    <Button
                      variant="outlined"
                      onClick={() => deleteData(obj)}
                    >
                      delete
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Contact;
