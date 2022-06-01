import React from 'react';
import './App.css';
import { useState } from 'react';
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

function App() {
const [gameStage,setGameStage]=useState(stages[0].name)
const [words] = useState(wordList);

const [pickedWord,setPickedWord] = useState("");
const [pickedCategory, setPickedCategory]=useState("");
const [letters, setLetters] = useState([]);

//console.log(words);

const pickWordAndCategory=()=>{
   //acessar de forma aleatoria uma categoria
  const categories = Object.keys(words);
  const category=categories[Math.floor(Math.random()* Object.keys(categories).length)]

 // console.log(category)

  //acessar de forma aleatoria uma palavra
  const word = words[category][Math.floor(Math.random()* words[category].length)]
//console.log(word)

//retornando o valor
return {word, category};

}
//starts no game
const startGame=()=>{

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
setLetters(letters);
  //iniciando
  setGameStage(stages[1].name)
}

//processas os inputs
const verifyLetter=()=>{

setGameStage(stages[2].name);

}

//reiniciar o jogo
const retry=()=>{
  setGameStage(stages[0].name);

}
  return (
    <>
{gameStage==='start' && <Star startGame={startGame}/>}
{gameStage==='game' && <Game verifyLetter={verifyLetter}/>}
{gameStage==='end' && <GameOver retry={retry}/>}

</>

  );
}

export default App;