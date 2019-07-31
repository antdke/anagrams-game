import React from "react";
import Timer2 from "./components/Timer2";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>"App Goes Here"</h1>
        <Timer2 />
      </header>
    </div>
  );
};

export default App;
