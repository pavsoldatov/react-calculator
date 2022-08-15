import classes from "./App.module.css";
import Card from "./components/UI/Card";
import ButtonList from "./components/Controls/ButtonList/ButtonList";
import Logger from "./components/Controls/ButtonList/Logger";
import { useEffect, useState, useReducer, useRef } from "react";

function displayValueReducer(state, action) {
  switch (action.type) {
    case "number":
      return state === "0" ? action.value : [...state, action.value];
    case "decimal":
      return !state.includes(action.value) ? [...state, action.value] : state;
    case "control_reset":
      return "0";
    case "control_remove":
      return state.length > 1 ? state.slice(0, state.length - 1) : "0";
    // case "control_divide":
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(displayValueReducer, "0");

  const handleClick = (e) => {
    dispatch({ type: e.target.dataset.buttontype, value: e.target.value });
  };

  return (
    <main className={classes.app}>
      <Card>
        <Logger value={state} />
        <ButtonList onClick={handleClick} />
      </Card>
    </main>
  );
}

export default App;
