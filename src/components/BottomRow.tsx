import React from "react";

/**
 * This component will:
 * 1. Store the possible words in an array
 * 2. Randomly pick a word from the array
 * 3. Scramble the selected word
 * 4. Display the scrambled, selected word in the bottom row
 */

const BottomRow = () => {
  const wordBank = ["ACTORS", "ASCENT", "RENTAL", "MASTER", "SKATED"];

  function randomSelect(words: any) {
    //random number selector
    let randNum = Math.floor(Math.random() * (4 - 0) + 0);
    //return word from array with number as index
    return words[randNum];
  }

  let oneWord = randomSelect(wordBank);

  return (
    <div>
      <h1>{oneWord}</h1>
    </div>
  );
};

export default BottomRow;
