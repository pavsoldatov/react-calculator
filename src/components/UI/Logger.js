import classes from './Logger.module.css';

function Logger () {
    return (
        <div className={classes.logger}>
            <p>Previous Calc</p>
            <p>Current Calc</p>
        </div>
    )
}

export default Logger