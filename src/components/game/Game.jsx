import React from 'react';
import './Game.css'

export const Game=({verifyLetter})=>{
    return (
        <>
      {/*   <h1>Jogar</h1>
        <button onClick={verifyLetter}>Finalizar jogo</button>
        */}
        <div className='game'>
            <p className='points'>
                <span>Pontuação: 000</span>
            </p>
            <h1>Adivinhe a palavra</h1>
            <h3 className='tip'>Dica sobre a palavra:
            <span>Dica ...</span>
            </h3>

            <div className="wordContainer">
                <span className='letter'>A</span>
                <span className='blackSquare'></span>
            </div>

        <div className="letterContainer">
            <form>
            <p>Tente adivinnhar a letra da palavra</p>
            <input type='text' name='letter' maxLength='1' required/>
        
        <button>Jogar</button>
        </form>
        </div>

            <div className="wordLettersContainer">
                <p>Letras já utilizadas:</p>
                <span>a,b</span>
            </div>
            
        </div>
        </>
    )
}