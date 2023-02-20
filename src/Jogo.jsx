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

export default function Jogo() {
  const [disabled, setDisabled] = useState(true);

  function iniciar() {
    setDisabled(false);
    console.log('fui clicado!')
  }
  
  return (
    <>
      <div className="jogo">
        <img src={forca6} alt="forca" />
        <div className="palavras">
          <button className="iniciar" onClick={iniciar}>Escolher Palavra</button>
          <h1 className="palavra">quarentena</h1>
        </div>
      </div>

      <Letras disabled={disabled}/>
    </>
    
  )
}