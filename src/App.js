import classes from "./App.module.css";
import Card from "./components/UI/Card";
import ButtonList from "./components/Controls/ButtonList/ButtonList";
import Logger from "./components/Controls/ButtonList/Logger";
import { useEffect, useState, useRef } from "react";

function App() {
  const [displayValue, setDisplayValue] = useState("0");

  const clickHandler = (e) => {
    setDisplayValue((prevState) => {
      const buttonType = e.target.dataset.buttontype;
      const buttonValue = e.target.value;

      switch (buttonType) {
        case "number":
          return displayValue === "0"
            ? buttonValue
            : `${prevState}${buttonValue}`;
        case "control":
          return displayValue;
        case "decimal":
          return !displayValue.includes(buttonValue)
            ? prevState + buttonValue
            : displayValue;
        case "control_reset":
          setDisplayValue("0");
        default:
          return displayValue;
      }
    });
  };

  return (
    <main className={classes.app}>
      <Card>
        <Logger value={displayValue} />
        <ButtonList onClick={clickHandler} />
      </Card>
    </main>
  );
}

export default App;
