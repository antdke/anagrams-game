import React from "react";
import Timer from "./components/Timer";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Timer />
      </header>
    </div>
  );
};

export default App;
