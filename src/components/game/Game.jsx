import React from 'react';
import './Game.css'

export const Game=({
    verifyLetter,
     pickedWord, 
     pickedCategory,
      letters,
       guessedLetters, 
       wrongLetters,
        guesses,
          score
        })=>{
    return (
        <>
      {/*   <h1>Jogar</h1>
        <button onClick={verifyLetter}>Finalizar jogo</button>
        */}
        <div className='game'>
            <p className='points'>
                <span>Pontuação: {score}</span>
            </p>

            <h1>Adivinhe a palavra</h1>
            <h3 className='tip'>Dica sobre a palavra:
            <span>{pickedCategory}</span>
            </h3>
        <p>Voce ainda tm xxx tentativas(s) {guesses}</p>
            <div className="wordContainer">
                {letters.map((letter, i)=>(
                    guessedLetters.includes(letter) ? (
             <span key={i} className='letter'>A</span>
                    ):(

                <span key={i} className='blackSquare'></span>
                    )
                ))}
                
            </div>

        <div className="letterContainer">
        <p>Tente adivinnhar a letra da palavra:</p>

            <form>
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