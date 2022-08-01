import classes from "./App.module.css";
import Card from "./components/UI/Card";
import Button from "./components/UI/Button";
import NumbersList from "./components/Controls/Numbers/NumbersList";

function App() {
  return (
    <div className={classes.app}>
      <Card>
        <NumbersList />
      </Card>
    </div>
  );
}

export default App;
