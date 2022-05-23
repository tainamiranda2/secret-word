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

console.log(words);
//starts no game
const startGame=()=>{
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