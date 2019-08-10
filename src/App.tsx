import React from "react";
import Game from "./components/Game";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <Game />
      </header>
    </div>
  );
};

export default App;
