import React, { useState } from "react";
import BottomRow from "./BottomRow";

const Timer = () => {
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
    <div>
      <h1>{value}</h1>
      <BottomRow time={value} />
    </div>
  );
};

export default Timer;
