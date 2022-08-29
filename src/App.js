import classes from "./App.module.css";
import Card from "./components/UI/Card";
import ButtonList from "./components/Controls/ButtonList/ButtonList";
import Logger from "./components/Controls/ButtonList/Logger";
import { useEffect, useState, useReducer, useRef } from "react";

const initialValue = {
  firstNumber: "0",
  secondNumber: null,
  operatorIsActive: false,
  isWellFormed: null,
};

function displayValueReducer(state, action) {
  switch (action.type) {
    case "number": {
      return state.firstNumber === initialValue.firstNumber
        ? { ...state, firstNumber: action.value }
        : { ...state, firstNumber: state.firstNumber + action.value };
    }

    case "decimal": {
      return state.firstNumber.includes(action.value)
        ? state
        : { ...state, firstNumber: state.firstNumber + action.value };
    }
    case "control_reset":
      return {
        ...state,
        firstNumber: initialValue.firstNumber,
        operatorIsActive: false,
        secondNumber: null,
      };

    case "control_remove": {
      const slicedFirstNum = state.firstNumber.slice(
        0,
        state.firstNumber.length - 1
      );

      if (state.firstNumber.length > 1)
        return {
          ...state,
          firstNumber: slicedFirstNum,
        };
      return { ...state, firstNumber: initialValue.firstNumber };
    }
    case "multiplication_operator": {
      state.operatorIsActive = true;
      if (state.operatorIsActive) {
        return {
          ...state,
          firstNumber: initialValue.firstNumber,
          secondNumber: state.firstNumber + action.value,
        };
      }

      return state;

      //   const operator = ` ${action.value} `;
      //   if (action.operatorIsActive === false) {
      //     action.setFirstNumber([state, operator]);
      //     action.setOperatorIsActive(true);
      //     return initialValue;
      //   }
      //   if (action.operatorIsActive) {
      //     action.setFirstNumber((prevState) => {
      //       return [...prevState, state];
      //     });
      //   }
      //   return initialValue;
    }

    default:
      break;
  }
}

function App() {
  const [state, dispatch] = useReducer(displayValueReducer, initialValue);
  const { firstNumber, secondNumber, operatorIsActive } = state;

  console.log(state);
  const handleClick = (e) => {
    dispatch({
      type: e.target.dataset.buttontype,
      value: e.target.value,
    });
  };

  return (
    <main className={classes.app}>
      <Card>
        <Logger enteredValue={firstNumber} expression={secondNumber} />
        <ButtonList onClick={handleClick} />
      </Card>
    </main>
  );
}

export default App;
