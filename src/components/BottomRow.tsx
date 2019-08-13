import React from "react";
import TopRow from "./TopRow";
import injectSheet from "react-jss";
import { Theme } from "theming";
import { Classes } from "jss";

/**
 * This component will:
 * 1. Store the possible words in an array
 * 2. Randomly pick a word from the array
 * 3. Scramble the selected word
 * 4. Display the scrambled, selected word in the bottom row
 */

const styles = (theme: Theme) => ({
  gameContainer: {
    width: "500px",
    margin: "75px auto 0"
    //backgroundColor: "blue" FOR TESTING THE WIDTH
  },
  topRowSpace: {
    height: "30px",
    marginBottom: "40px"
  },
  letterButtons: {
    padding: "20px 26px",
    margin: "20px 5px",
    border: "none",
    outline: "none",
    borderRadius: "6px",
    backgroundColor: "#ffe1a4",
    fontSize: "30px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 2px 9px 0 rgba(0, 0, 0, 0.24)",
    transitionDuration: "0.2s",
    webKitTransitionDuration: "0.2s",
    "&:disabled": {
      cursor: "not-allowed"
    },
    "&:hover": {
      boxShadow:
        "0 10px 14px 0 rgba(0, 0, 0, 0.24), 0 12px 35px 0 rgba(0, 0, 0, 0.19)"
    },
    "&:active": {
      boxShadow:
        "0 3px 4px 0 rgba(0, 0, 0, 0.40), 0 3px 12px 0 rgba(0, 0, 0, 0.35)"
    }
  },
  submitButton: {
    padding: "10px 20px",
    margin: "10px 10px",
    border: "none",
    borderRadius: "4px",
    outline: "none",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "20px",
    backgroundColor: "#4b84ce",
    color: "white",
    boxShadow: "0 2px 9px 0 rgba(0, 0, 0, 0.24)",
    transitionDuration: "0.2s",
    webKitTransitionDuration: "0.2s",
    "&:disabled": {
      cursor: "not-allowed"
    },
    "&:hover": {
      boxShadow:
        "0 10px 14px 0 rgba(0, 0, 0, 0.24), 0 12px 35px 0 rgba(0, 0, 0, 0.19)"
    },
    "&:active": {
      boxShadow:
        "0 3px 4px 0 rgba(0, 0, 0, 0.40), 0 3px 12px 0 rgba(0, 0, 0, 0.35)"
    }
  },
  deleteButton: {
    padding: "10px 20px",
    margin: "10px 10px",
    border: "none",
    borderRadius: "4px",
    outline: "none",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "20px",
    boxShadow: "0 4px 11px 0 rgba(0, 0, 0, 0.24)",
    transitionDuration: "0.2s",
    webKitTransitionDuration: "0.2s",
    "&:disabled": {
      cursor: "not-allowed"
    },
    "&:hover": {
      boxShadow:
        "0 10px 14px 0 rgba(0, 0, 0, 0.24), 0 12px 35px 0 rgba(0, 0, 0, 0.19)"
    },
    "&:active": {
      boxShadow:
        "0 3px 4px 0 rgba(0, 0, 0, 0.40), 0 3px 12px 0 rgba(0, 0, 0, 0.35)"
    }
  }
});

type BottomRowProps = {
  time: number;
  classes: Classes;
  theme: Theme;
};

const BottomRow: React.FC<BottomRowProps> = ({ time, theme, classes }) => {
  // test words
  const wordBank = ["MASTER"];

  // stores all the valid anagrams words for a world in word bank
  var validWords = [];

  // function to get the array of valid words for whatever word is randomly selected
  function getValidArray(gameWord: string) {
    var result = [];

    const anagrams: any = {
      MASTER: [
        "armets",
        "master",
        "maters",
        "matres",
        "ramets",
        "stream",
        "tamers",
        "tremas",
        "arets",
        "armet",
        "aster",
        "earst",
        "mares",
        "marse",
        "marts",
        "maser",
        "mater",
        "mates",
        "meats",
        "ramet",
        "rates",
        "reams",
        "reast",
        "resat",
        "satem",
        "smart",
        "smear",
        "stare",
        "steam",
        "stear",
        "strae",
        "tamer",
        "tames",
        "tares",
        "taser",
        "teams",
        "tears",
        "teras",
        "terms",
        "trams",
        "trema",
        "ames",
        "ares",
        "aret",
        "arms",
        "arse",
        "arts",
        "ates",
        "ears",
        "east",
        "eats",
        "eras",
        "erst",
        "etas",
        "maes",
        "mare",
        "mars",
        "mart",
        "mase",
        "mast",
        "mate",
        "mats",
        "meat",
        "mesa",
        "meta",
        "mets",
        "rams",
        "rase",
        "rast",
        "rate",
        "rats",
        "ream",
        "rems",
        "rest",
        "rets",
        "same",
        "sate",
        "seam",
        "sear",
        "seat",
        "sera",
        "seta",
        "star",
        "stem",
        "taes",
        "tame",
        "tams",
        "tare",
        "tars",
        "team",
        "tear",
        "teas",
        "tems",
        "term",
        "tram",
        "tres",
        "tsar",
        "ame",
        "are",
        "arm",
        "ars",
        "art",
        "ate",
        "ats",
        "ear",
        "eas",
        "eat",
        "ems",
        "era",
        "erm",
        "ers",
        "est",
        "eta",
        "mae",
        "mar",
        "mas",
        "mat",
        "mes",
        "met",
        "ram",
        "ras",
        "rat",
        "rem",
        "res",
        "ret",
        "sae",
        "sam",
        "sar",
        "sat",
        "sea",
        "ser",
        "set",
        "sma",
        "tae",
        "tam",
        "tar",
        "tas",
        "tea",
        "tes"
      ],
      TEST: ["test"],
      TEST2: ["test"],
      TEST3: ["test"]
    };

    // selects word that matched current word used in-game
    result = anagrams[gameWord];
    // console.log(gameWord);  DEBUG: CALL GAME WORD
    // console.log(anagrams[gameWord]); DEBUG: CHECK IF OBJECT LOOKUP WORKS

    return result;
  }

  // state of whether user is correct or not
  // controls whether correct effects or wrong effects happen
  const [answerFeedback, setAnswerFeedback] = React.useState(
    "Go ahead, give it a try!"
  );

  /**
   * TEMPORARY states to test user word validation
   */
  // change color of validation text
  const [correctOrNotColor, setCorrectOrNotColor] = React.useState("orange");
  // keep track of score - add +1 point for every correct word
  const [score, setScore] = React.useState(0);
  // keep track of words used already by user
  const [userWordArray, setUserWordArray] = React.useState([""]);

  function isValid(userWord: string, gameWord: string) {
    //grab array of anagram words for the current game word
    validWords = getValidArray(gameWord);
    console.log(userWordArray.toString());

    if (userWordArray.includes(userWord)) {
      setCorrectOrNotColor("purple");
      setAnswerFeedback("You've used that word already. Try again!");
      setLetters("");
    } else {
      // CORRECT WORD PATH
      if (validWords.includes(userWord.toLowerCase())) {
        // for every correct word generate by user, add to userWordArrary
        setUserWordArray([userWord, ...userWordArray]);

        // depending on the length of the word, give certain amounts of points
        if (userWord.length === 3) {
          setAnswerFeedback("Nice word! Keep it up 👍");
          setCorrectOrNotColor("green");
          setScore(score + 100);
        } else if (userWord.length === 4) {
          setAnswerFeedback("Good job! That's a great word 😃");
          setCorrectOrNotColor("green");
          setScore(score + 300);
        } else if (userWord.length === 5) {
          setAnswerFeedback("Whoa there smarty pants!! 🤓 Excellent Word! ");
          setCorrectOrNotColor("green");
          setScore(score + 700);
        } else if (userWord.length === 6) {
          setAnswerFeedback("WOW!! 2000 points! Phenomenal Word 🔥 🔥 🔥");
          setCorrectOrNotColor("green");
          setScore(score + 2000);
        }

        // then clear letters in TopRow
        setLetters("");
        // returns state back to neither
        //setAnswerFeedback("Neither");
      } else {
        // if not, make this state false to trigger 'incorrect' effects
        setAnswerFeedback("Sorry, that word doesn't exist. Try again!");
        setCorrectOrNotColor("red");
        // clear letters in TopRow
        setLetters("");
        // returns state back to neither
        //setAnswerFeedback("Neither");
      }
    }
  }

  // a function to randomnly select a word from wordBank
  function randomSelect(words: any) {
    //random number selector - VALUE IS 0 for SINGLE TEST WORD
    let randNum = Math.floor(Math.random() * (0 - 0) + 0);
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

  // delete the last letter of the word
  function backspace(deletedLetter: string) {
    setLetters(letters.slice(0, letters.length - 1));
  }

  // function to create the new string upon click
  function handleClick(letter: string) {
    setLetters(letters + letter);
  }

  // GAME WORD
  let gameWord = randomSelect(wordBank);
  let oneScrambledWord = scrambleWord(gameWord);
  // split scrambled word into an array of letters
  let scrambledLetters = oneScrambledWord.split("");

  //give each letter its own state
  const [firstLetter, setFirstLetter] = React.useState(scrambledLetters[0]);
  const [secondLetter, setSecondLetter] = React.useState(scrambledLetters[1]);
  const [thirdLetter, setThirdLetter] = React.useState(scrambledLetters[2]);
  const [fourthLetter, setFourthLetter] = React.useState(scrambledLetters[3]);
  const [fifthLetter, setFifthLetter] = React.useState(scrambledLetters[4]);
  const [sixthLetter, setSixthLetter] = React.useState(scrambledLetters[5]);

  // USER GENERATED WORD: The state of the total word being passed
  const [letters, setLetters] = React.useState("");

  // functions that disables all buttons once timer hits zero
  const bt = document.getElementById("btGame") as HTMLTextAreaElement;
  if (time > 0 && bt != null) {
    bt.disabled = false;
  } else if (time === 0 && bt != null) {
    bt.disabled = true;
  }

  const bt2 = document.getElementById("btGame2") as HTMLTextAreaElement;
  if (time > 0 && bt2 != null) {
    bt2.disabled = false;
  } else if (time === 0 && bt2 != null) {
    bt2.disabled = true;
  }

  const bt3 = document.getElementById("btGame3") as HTMLTextAreaElement;
  if (time > 0 && bt3 != null) {
    bt3.disabled = false;
  } else if (time === 0 && bt3 != null) {
    bt3.disabled = true;
  }

  const bt4 = document.getElementById("btGame4") as HTMLTextAreaElement;
  if (time > 0 && bt4 != null) {
    bt4.disabled = false;
  } else if (time === 0 && bt4 != null) {
    bt4.disabled = true;
  }

  const bt5 = document.getElementById("btGame5") as HTMLTextAreaElement;
  if (time > 0 && bt5 != null) {
    bt5.disabled = false;
  } else if (time === 0 && bt5 != null) {
    bt5.disabled = true;
  }

  const bt6 = document.getElementById("btGame6") as HTMLTextAreaElement;
  if (time > 0 && bt6 != null) {
    bt6.disabled = false;
  } else if (time === 0 && bt6 != null) {
    bt6.disabled = true;
  }

  const bt7 = document.getElementById("btGame7") as HTMLTextAreaElement;
  if (time > 0 && bt7 != null) {
    bt7.disabled = false;
  } else if (time === 0 && bt7 != null) {
    bt7.disabled = true;
  }

  const bt8 = document.getElementById("btGame8") as HTMLTextAreaElement;
  if (time > 0 && bt8 != null) {
    bt8.disabled = false;
  } else if (time === 0 && bt8 != null) {
    bt8.disabled = true;
  }

  // message to display when the timer hits zero
  let gameOverMessage;
  if (time === 0) {
    gameOverMessage = <h2>GAME OVER. Your score is: {score}</h2>;
  }

  return (
    <div className={classes.gameContainer}>
      {gameOverMessage}
      <h3 style={{ color: correctOrNotColor }}>{answerFeedback}</h3>
      <h2>{"Score: " + score}</h2>

      <div className={classes.topRowSpace}>
        <TopRow letters={letters} />
      </div>

      {/*Instead of mapping the buttons and trapping the key value inside the map,
      I'll just manually list them out since the letters are only 6 */}
      <button
        className={classes.letterButtons}
        onClick={() => handleClick(firstLetter)}
        id="btGame"
      >
        {firstLetter}
      </button>
      <button
        className={classes.letterButtons}
        onClick={() => handleClick(secondLetter)}
        id="btGame2"
      >
        {secondLetter}
      </button>
      <button
        className={classes.letterButtons}
        onClick={() => handleClick(thirdLetter)}
        id="btGame3"
      >
        {thirdLetter}
      </button>
      <button
        className={classes.letterButtons}
        onClick={() => handleClick(fourthLetter)}
        id="btGame4"
      >
        {fourthLetter}
      </button>
      <button
        className={classes.letterButtons}
        onClick={() => handleClick(fifthLetter)}
        id="btGame5"
      >
        {fifthLetter}
      </button>
      <button
        className={classes.letterButtons}
        onClick={() => handleClick(sixthLetter)}
        id="btGame6"
      >
        {sixthLetter}
      </button>

      <section>
        <button
          className={classes.deleteButton}
          onClick={() => backspace(letters)}
          id="btGame7"
        >
          delete
        </button>
        <button
          className={classes.submitButton}
          onClick={() => isValid(letters, gameWord)}
          id="btGame8"
        >
          submit word
        </button>
      </section>
    </div>
  );
};

export default injectSheet(styles)(BottomRow);
