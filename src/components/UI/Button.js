import classes from "./Button.module.css";

import React from "react";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type="button"
      value={props.value}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

export default Button;
