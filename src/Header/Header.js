import React from "react";
import Modal from "./Modal/Modal";
import classes from "./Header.module.css";

const header = props => {
  return (
    <header className={classes.Header}>
      <h1>My Library</h1>
      <Modal buttonText="Add New Book" addNewBook={props.addNewBook} />
    </header>
  );
};

export default header;
