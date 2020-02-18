import React from "react";
import Books from "./Books/Books";
import classes from "./Library.module.css";

const Library = props => {
  return (
    <table className={classes.Library}>
      <thead>
        <tr>
          <td>Title</td>
          <td>Author</td>
          <td>Pages</td>
          <td>Read</td>
          <td>Change Read Status</td>
          <td>Remove Book</td>
        </tr>
      </thead>

      <tbody>
        <Books
          books={props.books}
          removeBookHandler={props.removeBookHandler}
          changeReadStatusHandler={props.changeReadStatusHandler}
        />
      </tbody>
    </table>
  );
};

export default Library;
