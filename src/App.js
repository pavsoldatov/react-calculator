import classes from "./App.module.css";
import Card from "./components/UI/Card";
import Button from "./components/UI/Button";

function App() {
  return (
    <div className={classes.app}>
      <Card>
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </Card>
    </div>
  );
}

export default App;
