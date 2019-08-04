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
  const lettersArray = letters.split("");
  // let lettersArrayTemp = [...lettersArray];
  const [newLettersArray, setNewLettersArray] = React.useState(lettersArray);
  //const lettersArray = letters.split("");
  //setNewLettersArray(lettersArray);

  console.log(lettersArray);

  //function to delete letters from TopRow when clicked
  function deleteLetter(deletedLetter: string) {
    const newLetters = lettersArray.filter(
      (letter: any) => letter != deletedLetter
    );
    // console.log(newLetters);
    // lettersArrayTemp = newLetters.slice();

    setNewLettersArray(newLetters);
  }

  return (
    <div>
      <section>
        {lettersArray.map(letter => (
          <button onClick={() => deleteLetter(letter)}>{letter}</button>
        ))}
      </section>
    </div>
  );
};

export default TopRow;
