import React from  'react';
import './Start.css'

export const Star=({startGame})=>{

    return(
        <>
        <h2>Secret Word</h2>
        <p>Clique no botão abaixo para começar a jogar.</p>
        <button onClick={startGame}>Começe o jogo</button>
        
        </>
    )
}