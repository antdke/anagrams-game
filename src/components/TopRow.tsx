import React from "react";

/**
 * This compenent will:
 * 1. Take props (letters string) from BottomRow
 * 2. Display the letters as buttons that are deletable
 */

type TopRowProps = {
  letters: string;
};

const TopRow: React.FC<TopRowProps> = ({ letters }) => {
  return <div>{letters}</div>;
};

export default TopRow;
