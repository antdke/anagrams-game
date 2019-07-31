import React from "react";
import Timer from "./components/Timer";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>"App Goes Here"</h1>
        <Timer />
      </header>
    </div>
  );
};

export default App;
