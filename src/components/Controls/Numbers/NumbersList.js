import classes from "./NumbersList.module.css";
import Button from "../../UI/Button";

const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function NumbersList(props) {
  return (
    <>
      {NUMBERS.map((n) => (
        <Button text={n}></Button>
      ))}
    </>
  );
}

export default NumbersList;
