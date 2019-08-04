import React from "react";

/**
 * This compenent will:
 * 1. Take props (letters string) from BottomRow
 * 2. Display the letter in an input field
 */

type TopRowProps = {
  letters: string;
};

const TopRow: React.FC<TopRowProps> = ({ letters }) => {
  let lettersArray = letters.split("");

  return (
    <div>
      <section>
        {lettersArray.map(letter => (
          <button>{letter}</button>
        ))}
      </section>
    </div>
  );
};

export default TopRow;
