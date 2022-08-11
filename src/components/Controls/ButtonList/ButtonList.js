import Button from "../../UI/Button";
import React from "react";

const CALCULATOR_BUTTONS = [
  {
    type: "control_percent",
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
    type: "control_backspace",
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
    type: "number_seven",
    value: "7",
    id: "ns1",
    key: "7",
  },
  {
    type: "number_eight",
    value: "8",
    id: "ne2",
    key: "8",
  },
  {
    type: "number_nine",
    value: "9",
    id: "nn3",
    key: "9",
  },
  {
    type: "control_multiplier",
    value: "×",
    id: "cm5",
    key: "*",
  },
  {
    type: "number_four",
    value: "4",
    id: "nf4",
    key: "4",
  },
  {
    type: "number_five",
    value: "5",
    id: "nf5",
    key: "5",
  },
  {
    type: "number_six",
    value: "6",
    id: "ns6",
    key: "6",
  },
  {
    type: "control_plus",
    value: "+",
    id: "cp6",
    key: "+",
  },
  {
    type: "number_one",
    value: "1",
    id: "no7",
    key: "1",
  },
  {
    type: "number_two",
    value: "2",
    id: "nt8",
    key: "2",
  },
  {
    type: "number_three",
    value: "3",
    id: "nt9",
    key: "3",
  },
  {
    type: "control_minus",
    value: "-",
    id: "cm7",
    key: "-",
  },
  {
    type: "control_decimal",
    value: ".",
    id: "cd8",
    key: ".",
  },
  {
    type: "number_zero",
    value: "0",
    id: "nz10",
    key: "0",
  },
  {
    type: "control_equals",
    value: "=",
    id: "ce9",
    key: "=",
    alternativeKey: "Enter",
  },
];

const ButtonList = (props) => {
  return (
    <>
      {CALCULATOR_BUTTONS.map((item) => {
        return (
          <Button
            key={item.id}
            text={item.value}
            value={item.value}
            onClick={props.onClick}
          >
            {item.value}
          </Button>
        );
      })}
    </>
  );
};

export default ButtonList;
