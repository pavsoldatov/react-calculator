import classes from "./Logger.module.css";
import React from "react";

const Logger = React.forwardRef((props, ref) => {
  return (
    <>
      <output
        className={classes.logger}
        type="text"
        name="result"
        ref={ref}
      >
        <p className={classes["saved-number"]}>{props.expression}</p>
        <p className={classes["current-value"]}>{props.enteredValue}</p>
      </output>
    </>
  );
});

export default Logger;
