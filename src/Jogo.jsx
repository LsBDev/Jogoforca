import Letras from "./Letras";
import "./jogo.css"
// import forca0 from "./assets/imagens/forca0.png";
// import forca1 from "./assets/imagens/forca1.png";
// import forca2 from "./assets/imagens/forca2.png";
// import forca3 from "./assets/imagens/forca3.png";
// import forca4 from "./assets/imagens/forca4.png";
// import forca5 from "./assets/imagens/forca5.png";
import forca6 from "./assets/imagens/forca6.png";
import { useState } from "react";

export default function Jogo({wordGame}) {
  const [disabled, setDisabled] = useState(true);
  const [errorCount, setErrorCount] = useState();

  function iniciar() {
    setDisabled(false);
    setErrorCount(0)
  }

 const chosenWord = wordGame.split("");

  
  return (
    <>
      <div className="jogo">
        <img src={forca6} alt="forca" />
        <div className="palavras">
          <button className="iniciar" onClick={iniciar}>Escolher Palavra</button>
          <div className="adivinhar">
            {chosenWord.map((letter, index) => (<h1 key={index} className="palavra"> _ </h1>))}
          </div>          
        </div>
      </div>

      <Letras error={errorCount} setDisabled={setDisabled} disabled={disabled}/>
    </>
    
  )
}