import Letras from "./Letras";
import "./jogo.css"
import forca0 from "./assets/imagens/forca0.png";
import forca1 from "./assets/imagens/forca1.png";
import forca2 from "./assets/imagens/forca2.png";
import forca3 from "./assets/imagens/forca3.png";
import forca4 from "./assets/imagens/forca4.png";
import forca5 from "./assets/imagens/forca5.png";
import forca6 from "./assets/imagens/forca6.png";
import { useState } from "react";

export default function Jogo({wordGame}) {
  const [letterArray, setLetterArray] = useState([
    { id: 0, letra: 'a', isEnabled: false },
    { id: 1, letra: 'b', isEnabled: false },
    { id: 2, letra: 'c', isEnabled: false },
    { id: 3, letra: 'd', isEnabled: false },
    { id: 4, letra: 'e', isEnabled: false },
    { id: 5, letra: 'f', isEnabled: false },
    { id: 6, letra: 'g', isEnabled: false },
    { id: 7, letra: 'h', isEnabled: false },
    { id: 8, letra: 'i', isEnabled: false },
    { id: 9, letra: 'j', isEnabled: false },
    { id: 10, letra: 'k', isEnabled: false },
    { id: 11, letra: 'l', isEnabled: false },
    { id: 12, letra: 'm', isEnabled: false },
    { id: 13, letra: 'n', isEnabled: false },
    { id: 14, letra: 'o', isEnabled: false },
    { id: 15, letra: 'p', isEnabled: false },
    { id: 16, letra: 'q', isEnabled: false },
    { id: 17, letra: 'r', isEnabled: false },
    { id: 18, letra: 's', isEnabled: false },
    { id: 19, letra: 't', isEnabled: false },
    { id: 20, letra: 'u', isEnabled: false },
    { id: 21, letra: 'v', isEnabled: false },
    { id: 22, letra: 'w', isEnabled: false },
    { id: 23, letra: 'x', isEnabled: false },
    { id: 24, letra: 'y', isEnabled: false },
    { id: 25, letra: 'z', isEnabled: false }
  ])
  const [errorCount, setErrorCount] = useState(0)
  const forcaImagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6] 
  const chosenWord = wordGame.split("")
  const [secretWord, setSecretWord] = useState(chosenWord.map((letter) => ('_')))

  function iniciar() {
    setLetterArray((prevArray) => prevArray.map((object) => ({...object, isEnabled: true})))
    setErrorCount(0)
  }
  
  return (
    <>
      <div className="jogo">
        <img src={forcaImagens[errorCount]} alt="forca" />
        <div className="palavras">
          <button className="iniciar" onClick={iniciar}>Escolher Palavra</button>
          <div className="adivinhar">
            {secretWord.map((letter, index) => (<h1 key={index} className="palavra">{letter}</h1>))}
          </div>
        </div>
      </div>
      
      <Letras 
      errorCount={errorCount}  
      setErrorCount={setErrorCount} 
      letterArray={letterArray} 
      setLetterArray={setLetterArray} 
      chosenWord={chosenWord} 
      setSecretWord={setSecretWord}
      />
    </>
    
  )
}