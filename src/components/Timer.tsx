import React, { useState } from "react";
import BottomRow from "./BottomRow";
import injectSheet from "react-jss";
import { Theme } from "theming";
import { Props } from "react-jss/lib/JssProvider";
import { Classes } from "jss";

// styles object
const styles = (theme: Theme) => ({
  gameBorder: {
    border: "1px solid grey",
    borderRadius: "6px",
    margin: "225px 125px 0",
    paddingBottom: "50px"
  }
});

type TimerProps = {
  classes: Classes;
  theme: Theme;
};

const Timer: React.FC<TimerProps> = ({ classes, theme }) => {
  const [value, setValue] = useState(60);

  // decrease value by 1 until value === 0
  function tick(timerId: any) {
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
      <h1>{value}</h1>
      <BottomRow time={value} />
    </div>
  );
};

export default injectSheet(styles)(Timer);
