import './GameOver.css'
import React from 'react'

const GameOver =({retry, score, letters})=>{
  return (
    <div>
        <h1>Resetar jogo</h1>
        <h3>A palavra errada é:</h3> <span className='Palavraerrada'>{letters}</span>
        <h3> A sua pontuação foi : <span>{score}</span></h3>
        <button onClick={retry}>Reiniciar jogo</button>
    </div>
  )
}
export default GameOver

