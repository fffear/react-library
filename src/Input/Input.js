import React from "react";

const input = props => {
  let inputElement = null;

  switch (props.inputtype) {
    case "input":
      inputElement = (
        <input
          id={props.id}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          required
        />
      );
      break;
    case "select":
      inputElement = (
        <select id={props.id} type={props.type} name={props.name} required>
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
          id={props.id}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          required
        />
      );
  }

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
