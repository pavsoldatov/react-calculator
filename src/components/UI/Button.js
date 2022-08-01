import classes from "./Button.module.css";

function Button(props) {
  return (
    <button className={classes.button} type="button" value={props.value}>
      {props.value}
    </button>
  );
}

export default Button;
