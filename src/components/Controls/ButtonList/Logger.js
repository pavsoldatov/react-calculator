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
        <p>Previous Calc</p>
        <p>{props.value}</p>
      </output>
    </>
  );
});

export default Logger;
