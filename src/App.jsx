// import "./App.css";
import Display from "./components/display";
import Buttons from "./components/buttonContainer";
import styles from "./App.module.css";
import { useState } from "react";
function App() {
  const [calValue, setCalValue] = useState("");
  const onButtonClick = (buttonName) => {
    if (buttonName === "C") {
      setCalValue("")
    } else if (buttonName === "=") {
      const result=eval(calValue);
      setCalValue(result)
    } else {
      const newValue = calValue + buttonName;
      setCalValue(newValue);
    }
    // console.log(buttonName);
  };

  return (
    <center>
      <h1 className="text Center">Hey, Welcome to Calculator</h1>
      <div className={styles.calculator}>
        <Display displayValue={calValue}></Display>
        <Buttons onButtonClick={onButtonClick}></Buttons>
      </div>
    </center>
  );
}

export default App;
