import React from 'react';
import './GameOver.css'

export const GameOver=({retry})=>{
    return(
        <>
        <h2>Game over</h2>
        <button onClick={retry}>Resertar jogo</button>
        </>
    )
}