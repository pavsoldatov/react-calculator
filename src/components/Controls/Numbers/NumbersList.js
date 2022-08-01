import Button from "../../UI/Button";

// Write a function to push every 4th element back to
// array so that only controls are rendered on the right

const ENTITIES = [
  {
    type: "number",
    value: "1",
    id: "1n",
  },
  {
    type: "number",
    value: "2",
    id: "2n",
  },
  {
    type: "number",
    value: "3",
    id: "3n",
  },
  {
    type: "number",
    value: "4",
    id: "4n",
  },
  {
    type: "number",
    value: "5",
    id: "5n",
  },
  {
    type: "number",
    value: "6",
    id: "6n",
  },
  {
    type: "number",
    value: "7",
    id: "7n",
  },
  {
    type: "number",
    value: "8",
    id: "8n",
  },
  {
    type: "number",
    value: "9",
    id: "9n",
  },
  {
    type: "number",
    value: "0",
    id: "0n",
  },
  {
    type: "control",
    value: "+",
    id: "1c",
  },
  {
    type: "control",
    value: "-",
    id: "2c",
  },
  {
    type: "control",
    value: "x",
    id: "3c",
  },
  {
    type: "control",
    value: "/",
    id: "4c",
  },
  {
    type: "control",
    value: "=",
    id: "5c",
  },
];

function NumbersList(props) {
  return (
    <>
      {ENTITIES.map((item) => {
        return (
          <Button key={item.id} text={item.value} value={item.value}>
            {item.value}
          </Button>
        );
      })}
    </>
  );
}

export default NumbersList;
