import React from 'react';
import './GameOver.css'

export const GameOver=({retry, score})=>{
    return(
        <>
        <h2>Fim do jogo!</h2>
        <h2>A sua pontuação foi: <span>{score}</span>  </h2>
        <button onClick={retry}>Resertar jogo</button>
        </>
    )
}