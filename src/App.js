import classes from "./App.module.css";
import Card from "./components/UI/Card";
import ButtonList from "./components/Controls/ButtonList/ButtonList";
import Logger from "./components/UI/Logger"

function App() {
  return (
    <div className={classes.app}>
      <Card>
        <Logger />
        <ButtonList />
      </Card>
    </div>
  );
}

export default App;
