import React from "react";
import injectSheet from "react-jss";
import { Classes } from "jss";
import { Theme } from "theming";

/**
 * This compenent will:
 * 1. Display the string created as user clicks buttons
 * in BottomRow
 */

const styles = (theme: Theme) => ({
  topRow: {
    padding: "20px 26px",
    margin: "20px 5px",
    fontSize: "45px"
  }
});

type TopRowProps = {
  letters: string;
  classes: Classes;
  theme: Theme;
};

const TopRow: React.FC<TopRowProps> = ({ letters, classes, theme }) => {
  return <section className={classes.topRow}>{letters}</section>;
};

export default injectSheet(styles)(TopRow);
