import Button from "./Button";
import classes from "./ButtonList.module.css";
import React from "react";

const CALCULATOR_BUTTONS = [
  {
    type: "control",
    value: "%",
    id: "cp1",
  },
  {
    type: "control_reset",
    value: "C",
    id: "cr2",
    key: "Escape",
  },
  {
    type: "control_remove",
    value: "⌫",
    id: "cb3",
    key: "Backspace",
  },
  {
    type: "control_divide",
    value: "÷",
    id: "cd4",
    key: "/",
  },
  {
    type: "number",
    value: "7",
    id: "ns1",
    key: "7",
  },
  {
    type: "number",
    value: "8",
    id: "ne2",
    key: "8",
  },
  {
    type: "number",
    value: "9",
    id: "nn3",
    key: "9",
  },
  {
    type: "control",
    value: "×",
    id: "cm5",
    key: "*",
  },
  {
    type: "number",
    value: "4",
    id: "nf4",
    key: "4",
  },
  {
    type: "number",
    value: "5",
    id: "nf5",
    key: "5",
  },
  {
    type: "number",
    value: "6",
    id: "ns6",
    key: "6",
  },
  {
    type: "control",
    value: "+",
    id: "cp6",
    key: "+",
  },
  {
    type: "number",
    value: "1",
    id: "no7",
    key: "1",
  },
  {
    type: "number",
    value: "2",
    id: "nt8",
    key: "2",
  },
  {
    type: "number",
    value: "3",
    id: "nt9",
    key: "3",
  },
  {
    type: "control",
    value: "-",
    id: "cm7",
    key: "-",
  },
  {
    type: "decimal",
    value: ".",
    id: "cd8",
    key: ".",
  },
  {
    type: "number",
    value: "0",
    id: "nz10",
    key: "0",
  },
  {
    type: "control",
    value: "=",
    id: "ce9",
    key: "=",
    alternativeKey: "Enter",
  },
];

const ButtonList = (props) => {
  return (
    <ul className={classes["button-list"]}>
      {CALCULATOR_BUTTONS.map((item) => {
        return (
          <Button
            key={item.id}
            value={item.value}
            buttonType={item.type}
            onClick={props.onClick}
          >
            {item.value}
          </Button>
        );
      })}
    </ul>
  );
};

export default ButtonList;
