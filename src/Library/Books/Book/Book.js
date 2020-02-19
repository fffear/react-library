import React from "react";
import classes from "./Book.module.css";

const Book = props => {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.author}</td>
      <td>{props.pages}</td>
      <td>{props.read}</td>
      <td>
        <button onClick={props.changeReadStatusHandler}>
          Change Read Status
        </button>
      </td>
      <td>
        <button className={classes.RemoveBtn} onClick={props.removeBookHandler}>
          Remove
        </button>
      </td>
    </tr>
  );
};

export default Book;
