import classes from "./Logger.module.css";

function Logger(props) {
  return (
    <div className={classes.logger}>
      <p>Previous Calc</p>
      <p>{props.value}</p>
    </div>
  );
}

export default Logger;
