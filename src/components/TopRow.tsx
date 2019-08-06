import React from "react";

/**
 * This compenent will:
 * 1. Take props (letters string) from BottomRow
 * 2. Display the letters as buttons that are deletable
 */

type TopRowProps = {
  letters: string;
  deleteLetter: Function;
};

const TopRow: React.FC<TopRowProps> = ({ letters, deleteLetter }) => {
  const lettersArray = letters.split("");

  return (
    <div>
      <section>
        {lettersArray.map((letter, index) => (
          <section>
            <button onClick={() => deleteLetter(index)}>{letter}</button>
          </section>
        ))}
      </section>
    </div>
  );
};

export default TopRow;
