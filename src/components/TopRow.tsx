import React from "react";

/**
 * This compenent will:
 * 1. Take props (letters array) from BottomRow
 * 2. Display the letter in an input field
 */

type TopRowProps = {
  letters: string;
};

const TopRow: React.FC<TopRowProps> = ({ letters }) => {
  return (
    <div>
      <h1>{letters}</h1>
    </div>
  );
};

export default TopRow;
