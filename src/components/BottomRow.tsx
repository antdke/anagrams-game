import React from "react";
import TopRow from "./TopRow";

/**
 * This component will:
 * 1. Store the possible words in an array
 * 2. Randomly pick a word from the array
 * 3. Scramble the selected word
 * 4. Display the scrambled, selected word in the bottom row
 */

const BottomRow = () => {
  const wordBank = ["ACTORS", "ASCENT", "RENTAL", "MASTER", "SKATED"];

  // a function to randomnly select a word from wordBank
  function randomSelect(words: any) {
    //random number selector
    let randNum = Math.floor(Math.random() * (4 - 0) + 0);
    //return word from array with number as index
    return words[randNum];
  }

  function scrambleWord(word: String) {
    //split words into an array of characters
    let letters = word.split("");
    //grab the length of the array
    let n = letters.length;

    //traverse through the letters array and juggle the elements to a random index
    for (let i = n - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = letters[i];
      letters[i] = letters[j];
      letters[j] = temp;
    }

    //return a joined array as a scrambled word
    return letters.join("");
  }

  function deleteLetter(deletedLetter: string) {}

  let oneWord = randomSelect(wordBank);
  let oneScrambledWord = scrambleWord(oneWord);
  //split scrambled word into an array of letters
  let scrambledLetters = oneScrambledWord.split("");

  //give each letter its own state
  const [firstLetter, setFirstLetter] = React.useState(scrambledLetters[0]);
  const [secondLetter, setSecondLetter] = React.useState(scrambledLetters[1]);
  const [thirdLetter, setThirdLetter] = React.useState(scrambledLetters[2]);
  const [fourthLetter, setFourthLetter] = React.useState(scrambledLetters[3]);
  const [fifthLetter, setFifthLetter] = React.useState(scrambledLetters[4]);
  const [sixthLetter, setSixthLetter] = React.useState(scrambledLetters[5]);

  // The state of the total word being passed
  const [lettersArray, setLettersArray] = React.useState("");

  return (
    <div>
      {/* What if the problem is that the lettersArray value in .map is out of reach to the TopRow component???? */}
      <TopRow letters={lettersArray} deleteLetter={deleteLetter} />

      {/*Instead of mapping the buttons and trapping the key value inside the map,
      I'll just manually list them out since the letters are only 6 */}
      <button onClick={() => setLettersArray(lettersArray + firstLetter)}>
        {firstLetter}
      </button>
      <button onClick={() => setLettersArray(lettersArray + secondLetter)}>
        {secondLetter}
      </button>
      <button onClick={() => setLettersArray(lettersArray + thirdLetter)}>
        {thirdLetter}
      </button>
      <button onClick={() => setLettersArray(lettersArray + fourthLetter)}>
        {fourthLetter}
      </button>
      <button onClick={() => setLettersArray(lettersArray + fifthLetter)}>
        {fifthLetter}
      </button>
      <button onClick={() => setLettersArray(lettersArray + sixthLetter)}>
        {sixthLetter}
      </button>
    </div>
  );
};

export default BottomRow;
