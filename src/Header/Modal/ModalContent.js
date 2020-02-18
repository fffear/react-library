import React from "react";
import ReactDOM from "react-dom";

import Input from "../../Input/Input";
import classes from "./ModalContent.module.css";

const ModalContent = props => {
  return ReactDOM.createPortal(
    <aside
      className={classes.ModalCover}
      onClick={event => {
        if (event.target.className === classes.ModalCover) {
          props.closeModal();
        }
      }}
    >
      <div className={classes.ModalArea}>
        <button className={classes.ModalClose} onClick={props.closeModal}>
          Close
        </button>

        <div className={classes.ModalBody}>
          <form
            onSubmit={event => {
              props.addNewBook(event);
              props.closeModal();
            }}
          >
            <Input
              inputtype="input"
              id="title"
              label="Title"
              type="text"
              name="title"
              placeholder="Title"
              required
            />

            <Input
              inputtype="input"
              id="author"
              label="Author"
              type="text"
              name="author"
              placeholder="Author"
              required
            />

            <Input
              inputtype="input"
              id="no-of-pages"
              label="No of pages"
              type="number"
              name="no-of-pages"
              placeholder="No of pages"
              required
              min="1"
            />

            <Input
              inputtype="select"
              id="read-status"
              label="Read Status"
              name="read-status"
              options={["Read", "Not Read Yet"]}
            />

            {/* <label htmlFor="read-status">Read Status</label>
            <select id="read-status" name="read-status" required>
              <option value="Read">Read</option>
              <option value="Not Read Yet">Not Read Yet</option>
            </select> */}

            <button type="submit">Add Book</button>
          </form>
        </div>
      </div>
    </aside>,
    document.body
  );
};

export default ModalContent;
