import classes from "./Button.module.css";

function Button ({text, ...props }) {
    return (
        <button className={classes.button}>
            {text}
        </button>
    )
}

export default Button