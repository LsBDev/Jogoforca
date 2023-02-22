import { useState } from "react";
import "./letras.css"

export default function Letras ({disabled, error, setDisabled}) {
  const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const [click, setClick] =  useState([])

  function clickLetter(letter) {
    setClick([...click, letter])
  }
  

  return (
    <div className="letras">
      {array.map((l, index) => <button key={index} onClick={() => clickLetter(l)} className={`letra ${disabled ? '' : 'enabled'} ${click.includes(l) ? 'disabled' : ''}`} disabled={disabled}>{l.toUpperCase()}</button>
      )} 
    </div>
  )
}