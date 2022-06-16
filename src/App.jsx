import React from 'react';
import './App.css';
import { useState, useEffect , useCallback} from 'react';
//dados
import {wordList} from './data/word'

//components

import {Game} from './components/game/Game'
import { Star } from './components/start/Star';
import {GameOver } from './components/gameover/GameOver';
const stages=[
  {id:1, name:"start"},
  {id:2, name:"game"},
  {id:3, name:"end"},

]

const guessesQty=3;

function App() {
const [gameStage,setGameStage]=useState(stages[0].name);
const [words] = useState(wordList);

const [pickedWord,setPickedWord] = useState("");
const [pickedCategory, setPickedCategory]=useState("");
const [letters, setLetters] = useState([]);

const [guessedLetters, setGuessedLetters] = useState([]); ///letras adivinhadas
const [wrongLetters, setWongLetters]= useState([]); //letras erradas
const [guesses, setGuesses] =useState(guessesQty) //tentaivas de úsuario
const [score,setScore]=useState(0); //pontuação do usuairo
//console.log(words);

const pickWordAndCategory=useCallback( ()=>{
   //acessar de forma aleatoria uma categoria
  const categories = Object.keys(words);
  const category=categories[Math.floor(Math.random()* Object.keys(categories).length)]

 // console.log(category)

  //acessar de forma aleatoria uma palavra
  const word = words[category][Math.floor(Math.random()* words[category].length)]
//console.log(word)

//retornando o valor
return {word, category};

},[words]);
//starts no game
const startGame=useCallback( ()=>{
//limpar letras
clearLetterState();
  //funcao de pickword e pictcaterogy
const {word, category} = pickWordAndCategory();
//console.log(word, category)

//criar um array de letras 

let wordLetters =word.split("");
wordLetters=wordLetters.map((l)=>l.toLowerCase())

//console.log(wordLetters)

//setar estados
setPickedWord(word);
setPickedCategory(category);
setLetters(wordLetters);
  //iniciando
  setGameStage(stages[1].name)
}, [pickWordAndCategory]);

//processas os inputs
const verifyLetter=(letter)=>{
console.log(letter)
//setGameStage(stages[2].name);

 const normalizeLetter=letter.toLowerCase();
//checar se letrar é utilizada
if(
  guessedLetters.includes(normalizeLetter) ||
  wrongLetters.includes(normalizeLetter)
  ){
    return;
  }
  //push guessed letter ou remove
if(letters.includes(normalizeLetter)){
  setGuessedLetters((actualGuessesdLetters)=>[
    ...actualGuessesdLetters,
    normalizeLetter
  ]);
//letters wrong
}else{
setWongLetters((actualWrongLetters)=>[
  ...actualWrongLetters,
  normalizeLetter
]);
  setGuesses((actualGuesses)=> actualGuesses -1 )
}
//console.log(guessedLetters);
//console.log(wrongLetters)

}
//funcção para limpar
const clearLetterState=()=>{
setGuessedLetters([]);
setWongLetters([]);

}

//checar as tentativas
useEffect(()=>{
  if(guesses <=0){
    clearLetterState();
    setGameStage(stages[2].name);

  }
}, [guesses]);

//checar as condições
useEffect(()=>{
//gerando novo array
  const uniqueLetters=[... new Set(letters)];
  console.log(uniqueLetters);
//com condição
  if(guessedLetters.length===uniqueLetters.length){
    setScore((actualScore)=> (actualScore +=100));
    startGame();
  }

}, [guessedLetters, letters,startGame])

//reiniciar o jogo
const retry=()=>{
  setScore(0);
  setGuesses(guessesQty);
  setGameStage(stages[0].name);

}
  return (
    <>
{gameStage==='start' && <Star startGame={startGame}/>}

{gameStage==='game' &&
 <Game
  verifyLetter={verifyLetter}
 pickedWord={pickedWord}
 pickedCategory={pickedCategory}
 letters={letters}
 guessedLetters={guessedLetters}
 wrongLetters={wrongLetters}
 guesses={guesses}
 score={score}
 />}

{gameStage==='end' && <GameOver 
retry={retry}
score={score}
/>}

</>

  );
}

export default App;