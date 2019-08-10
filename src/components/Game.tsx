import React from "react";
import Timer from "./Timer";
import { ThemeProvider } from "react-jss";

// background color
document.body.style.backgroundColor = "#fdf0f2";

const theme = {};

const Game: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <section>
        <Timer />
      </section>
    </ThemeProvider>
  );
};

export default Game;
