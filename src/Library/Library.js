import React from "react";
import Books from "./Books/Books";
import classes from "./Library.module.css";

const Library = props => {
  return (
    <table className={classes.Library}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Pages</th>
          <th className={classes.read}>Read</th>
          <th className={classes.ChangeReadStatus}>Change Read Status</th>
          <th className={classes.Remove}>Remove Book</th>
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
