import "./letras.css"

export default function Letras ({disabled}) {
  const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


  return (
    <div className="letras">
      {array.map((l) => <button className={`letra ${disabled ? '' : 'enabled'}`} disabled={disabled}>{l.toUpperCase()}</button>
      )} 
    </div>
  )
}