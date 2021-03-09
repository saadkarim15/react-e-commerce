import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Screen from "./components/Screen";

function App() {
  const [value, setValue] = useState("0");
  return (
    <div className="app">
      <div className="calculator">
        <Screen value={value} />
        <Buttons value={value} setValue={setValue} />
      </div>
    </div>
  );
}

export default App;
