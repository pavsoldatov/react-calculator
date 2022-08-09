import Button from "../../UI/Button";

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
  },
  {
    type: "control_backspace",
    value: "⌫",
    id: "cb3",
  },
  {
    type: "control_divide",
    value: "÷",
    id: "cd4",
  },
  {
    type: "number_seven",
    value: "7",
    id: "ns1",
  },
  {
    type: "number_eight",
    value: "8",
    id: "ne2",
  },
  {
    type: "number_nine",
    value: "9",
    id: "nn3",
  },
  {
    type: "control_multiplier",
    value: "×",
    id: "cm5",
  },
  {
    type: "number_four",
    value: "4",
    id: "nf4",
  },
  {
    type: "number_five",
    value: "5",
    id: "nf5",
  },
  {
    type: "number_six",
    value: "6",
    id: "ns6",
  },
  {
    type: "control_plus",
    value: "+",
    id: "cp6",
  },
  {
    type: "number_one",
    value: "1",
    id: "no7",
  },
  {
    type: "number_two",
    value: "2",
    id: "nt8",
  },
  {
    type: "number_three",
    value: "3",
    id: "nt9",
  },
  {
    type: "control_minus",
    value: "-",
    id: "cm7",
  },
  {
    type: "control_comma",
    value: ",",
    id: "cc8",
  },
  {
    type: "number_zero",
    value: "0",
    id: "nz10",
  },
  {
    type: "control_equals",
    value: "=",
    id: "ce9",
  }
];

function ButtonList() {
  return (
    <>
      {CALCULATOR_BUTTONS.map((item) => {
        return (
          <Button key={item.id} text={item.value} value={item.value}>
            {item.value}
          </Button>
        );
      })}
    </>
  );
}

export default ButtonList;
