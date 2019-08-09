import React from "react";
import Timer from "./components/Timer";
import BottomRow from "./components/BottomRow";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Timer />
        <BottomRow />
      </header>
    </div>
  );
};

export default App;
