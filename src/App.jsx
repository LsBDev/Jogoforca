import Jogo from "./Jogo";
import palavras from "./palavras.js"

export default function App() {
  const raffle = palavras[Math.floor(Math.random()*palavras.length)]


  return (
    <div>
      <Jogo wordGame={raffle}/>        
    </div>
  );
}

