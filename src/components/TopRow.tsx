import React from "react";

/**
 * This compenent will:
 * 1. Display the string created as user clicks buttons
 * in BottomRow
 */

type TopRowProps = {
  letters: string;
};

const TopRow: React.FC<TopRowProps> = ({ letters }) => {
  return <div>{letters}</div>;
};

export default TopRow;
