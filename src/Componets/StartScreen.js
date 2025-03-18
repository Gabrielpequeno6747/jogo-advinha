import "./StartScreen.css"
import React from 'react'

function StartScreen({startGame}) {
  return (
    <div className="Função-inical-jogo">
        <h1> Jogo Adivinha Palavras</h1>
        <p>Clique no botão abaixo para jogar</p>
        <button onClick={startGame}>começar o jogar!</button>
        

    </div>
  )
}

export default StartScreen