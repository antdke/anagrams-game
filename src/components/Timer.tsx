import React, { useState } from "react";
import BottomRow from "./BottomRow";
import injectSheet from "react-jss";
import { Theme } from "theming";
import { Classes } from "jss";

// styles object
const styles = (theme: Theme) => ({
  gameBorder: {
    border: "1px solid #fadadf",
    borderRadius: "6px",
    margin: "225px 125px 0",
    paddingBottom: "50px",
    backgroundColor: "#fadadf",
    boxShadow: "0 4px 9px 0 rgba(0, 0, 0, 0.24)"
  },
  timer: {
    width: "40px",
    float: "right",
    border: "1px solid #dffada",
    borderRadius: "6px",
    marginRight: "25px",
    padding: "10px",
    backgroundColor: "#dffada",
    boxShadow: "0 2px 9px 0 rgba(0, 0, 0, 0.24)",
    "&:hover": {
      boxShadow: "0 8px 9px 0 rgba(0, 0, 0, 0.24)"
    }
  }
});

type TimerProps = {
  classes: Classes;
  theme: Theme;
};

const Timer: React.FC<TimerProps> = ({ classes, theme }) => {
  const [value, setValue] = useState(60);

  // decrease value by 1 until value === 0
  function tick(timerId: number) {
    if (value <= 0) {
      clearTimeout(timerId);
    } else {
      setValue(value - 1);
    }
  }
  //starts and runs the timer
  var timerId = setTimeout(tick, 1000);

  return (
    <div className={classes.gameBorder}>
      <h1 className={classes.timer}>{value}</h1>
      <BottomRow time={value} />
    </div>
  );
};

export default injectSheet(styles)(Timer);
