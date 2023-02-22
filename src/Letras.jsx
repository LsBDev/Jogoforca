// import { useState } from "react";
import "./letras.css"

export default function Letras ({letterArray, errorCount,  setErrorCount, setLetterArray, chosenWord,  secretWord, setSecretWord, forcaImagens, setForca}) {
  // const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
  setForca(forcaImagens[errorCount])
  function clickLetter(letter) {
    setLetterArray((prevArray) => prevArray.map(object => {
      if(object.id === letter.id) {
        object.isEnabled = false
        return object
      } else {
        return object
      }
    })
    )
    if(chosenWord.includes(letter.letra)) {
      setSecretWord((prevArray) => {
        const newArray = [...prevArray]
        for(let i = 0; i < chosenWord.length; i++) {
          if(chosenWord[i] === letter.letra) {
            newArray[i] = letter.letra
          }
        }
        return newArray
      })      
    } else {
      setErrorCount(errorCount + 1)
    }
  }    

  return (
    <div className="letras">
      {letterArray.map((l) => <button key={l.id} onClick={() => clickLetter(l)} className={`letra ${l.isEnabled ? 'enabled': 'disabled'}`} disabled={l.isEnabled ? false : true}>{l.letra.toUpperCase()}</button>)} 
    </div>
  )
}