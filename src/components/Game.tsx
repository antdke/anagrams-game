import React from "react";
import Timer from "./Timer";
import { ThemeProvider } from "react-jss";

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
