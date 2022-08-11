import classes from "./App.module.css";
import Card from "./components/UI/Card";
import ButtonList from "./components/Controls/ButtonList/ButtonList";
import Logger from "./components/UI/Logger";

import { useEffect, useState, useRef } from "react";

function App() {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const keyPressHandler = (e) => {
      setDisplayValue((prevState) => {
        return displayValue === "0" ? e.key : `${prevState}${e.key}`;
      });
    };
    
    document.addEventListener("keydown", keyPressHandler);
    return () => document.removeEventListener("keydown", keyPressHandler);
  }, [displayValue]);

  const clickHandler = (e) => {
    setDisplayValue((prevState) => {
      return displayValue === "0" ? e.target.value : `${prevState}${e.target.value}`;
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
