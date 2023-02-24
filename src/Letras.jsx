// import { useState } from "react";
import "./letras.css";

export default function Letras({
  letterArray,
  // errorCount,
  // setErrorCount,
  setLetterArray,
  chosenWord,
  secretWord,
  setSecretWord,
  gameState,
  setGameState,
  game
}) {
  // const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  function clickLetter(letter) {
    let newErrorCount = gameState.errorCount
    let newSecretWord = [...secretWord]

    console.log(newErrorCount)

    setLetterArray((prevArray) =>
      prevArray.map((object) => {
        if (object.id === letter.id) {
          object.isEnabled = false;
          return object;
        } else {
          return object;
        }
      })
    );


    if (chosenWord.includes(letter.letra)) {
      for(let i = 0; i < chosenWord.length; i++) {
        if(chosenWord[i] === letter.letra) {
          newSecretWord[i] = letter.letra
        }
      }
      setSecretWord((prevArray) => {
        const newArray = [...prevArray];
        for (let i = 0; i < chosenWord.length; i++) {
          if (chosenWord[i] === letter.letra) {
            newArray[i] = letter.letra;
          }
        }
        return newArray;
      });
    } else {
      newErrorCount++
      setGameState((prevObject) => {
        const newObject = {...prevObject}
        newObject.errorCount++
        return newObject
      });
    }
    if(newErrorCount >= 6) {
      gameState.game = game.LOST
      setSecretWord(chosenWord);
      setLetterArray((prevArray) =>
        prevArray.map((object) => ({ ...object, isEnabled: false }))
      )
    } else if (chosenWord.toString() === newSecretWord.toString()) {
      setGameState((prevObject) => ({...prevObject, game: game.WON}) )
      setLetterArray((prevArray) =>
        prevArray.map((object) => ({ ...object, isEnabled: false }))
      )
    }
    console.log(secretWord.toString())
    console.log(chosenWord.toString())
  } 


  return (
    <div className="letras">
      {letterArray.map((l) => (
        <button
          data-test="letter"
          key={l.id}
          onClick={() => clickLetter(l)}
          className={`letra ${l.isEnabled ? "enabled" : "disabled"}`}
          disabled={l.isEnabled ? false : true}
        >
          {l.letra.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
 
