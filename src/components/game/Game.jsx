import React from 'react';
import './Game.css'

export const Game=({verifyLetter})=>{
    return (
        <>
        <h1>Jogar</h1>
        <button onClick={verifyLetter}>Finalizar jogo</button>
        </>
    )
}