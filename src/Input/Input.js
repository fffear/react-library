import React from "react";
import classes from "./Input.module.css";

const input = props => {
  let inputElement = null;

  switch (props.inputtype) {
    case "input":
      inputElement = (
        <input
          className={classes.InputEle}
          id={props.id}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          min={props.min}
          required
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={classes.InputEle}
          id={props.id}
          type={props.type}
          name={props.name}
          required
        >
          {props.options.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={classes.InputEle}
          id={props.id}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          required
        />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label} htmlFor={props.id}>
        {props.label}
      </label>
      {inputElement}
    </div>
  );
};

export default input;
