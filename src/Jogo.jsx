import Letras from "./Letras";
import palavras from "./palavras";
import "./jogo.css";
import forca0 from "./assets/imagens/forca0.png";
import forca1 from "./assets/imagens/forca1.png";
import forca2 from "./assets/imagens/forca2.png";
import forca3 from "./assets/imagens/forca3.png";
import forca4 from "./assets/imagens/forca4.png";
import forca5 from "./assets/imagens/forca5.png";
import forca6 from "./assets/imagens/forca6.png";
import { useState } from "react";

export default function Jogo() {
  const game = { WON: 0, LOST: 1, STARTED: 2, NOT_STARTED: 3 };
  const [letterArray, setLetterArray] = useState([
    { letra: "a", isEnabled: false },
    { letra: "b", isEnabled: false },
    { letra: "c", isEnabled: false },
    { letra: "d", isEnabled: false },
    { letra: "e", isEnabled: false },
    { letra: "f", isEnabled: false },
    { letra: "g", isEnabled: false },
    { letra: "h", isEnabled: false },
    { letra: "i", isEnabled: false },
    { letra: "j", isEnabled: false },
    { letra: "k", isEnabled: false },
    { letra: "l", isEnabled: false },
    { letra: "m", isEnabled: false },
    { letra: "n", isEnabled: false },
    { letra: "o", isEnabled: false },
    { letra: "p", isEnabled: false },
    { letra: "q", isEnabled: false },
    { letra: "r", isEnabled: false },
    { letra: "s", isEnabled: false },
    { letra: "t", isEnabled: false },
    { letra: "u", isEnabled: false },
    { letra: "v", isEnabled: false },
    { letra: "w", isEnabled: false },
    { letra: "x", isEnabled: false },
    { letra: "y", isEnabled: false },
    { letra: "z", isEnabled: false },
  ]);
  const [errorCount, setErrorCount] = useState(0)
  const forcaImagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
  const [gameState, setGameState] = useState(game.NOT_STARTED);
  const [raffle, setRaffle] = useState([]);
  const [secretWord, setSecretWord] = useState([]);

  function iniciar() {
    const raffleWord =
      palavras[Math.floor(Math.random() * palavras.length)].split("");
    setRaffle(raffleWord);
    setSecretWord(raffleWord.map((char) => "_"));
    setLetterArray((prevArray) =>
      prevArray.map((object) => ({ ...object, isEnabled: true }))
    );
    setGameState(game.STARTED);
    setErrorCount(0)
  }


  return (
    <>
      <div className="jogo">
        <img
          data-test="game-image"
          src={forcaImagens[errorCount]}
          alt="forca"
        />
        <div className="palavras">
          <button
            data-test="choose-word"
            className="iniciar"
            disabled={gameState === game.STARTED ? true : false}
            onClick={iniciar}
          >
            Escolher Palavra
          </button>
          <div className="adivinhar">
            {secretWord.map((letter, index) => (
              <h1
                data-test="word"
                key={index}
                className={`palavra ${
                  gameState === game.LOST ? "red" : ""
                } ${gameState === game.WON ? "green" : ""}`}
              >
                {letter}
              </h1>
            ))}
          </div>
        </div>
      </div>

      <Letras
        errorCount={errorCount}
        setErrorCount={setErrorCount}
        letterArray={letterArray}
        setLetterArray={setLetterArray}
        chosenWord={raffle}
        secretWord={secretWord}
        setSecretWord={setSecretWord}
        gameState={gameState}
        setGameState={setGameState}
        game={game}
      />
    </>
  );
}
