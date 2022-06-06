import React, { useState, useRef } from 'react';
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
         const [letter, setLetter]= useState("");
const letterInputRed=useRef(null);

const handleSubmit =(e)=>{
e.preventDefault();
//ativando a função
verifyLetter();
//apagar depois de utlizado
setLetter("");

//focando
letterInputRed.current.focus();
}

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

            <form onSubmit={handleSubmit}>
            <input 
            type='text'
             name='letter' 
             maxLength='1'
            required 
            onChange={(e)=>setLetter(e.target.value)}
            value={letter}
            ref={letterInputRed}
            />
        
        <button>Jogar</button>
        </form>

        </div>

            <div className="wordLettersContainer">
                <p>Letras já utilizadas:</p>
                {wrongLetters.map((letter, i)=>{
                    <span key={i}>{letter},</span>
                })}
                
            </div>
            
        </div>
        </>
    )
}