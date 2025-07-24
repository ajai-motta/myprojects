import React, { useState } from "react";
import Player from "./components/player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";
const playerBoard=[[null,null,null],
[null,null,null],
[null,null,null]
];
function handleTurns(gameTurns){
   let currentPlayer='X'
        if(gameTurns.length>0 && gameTurns[0].player==='X'){
          currentPlayer='O';
        }
      return currentPlayer;
}
function App() {

  const[players,setPlayers]=useState({
    X:'Player 1',
    O: 'Player 2'
  })

  const [gameturns,setGameTurns]=useState([])
  const activeTurns=handleTurns(gameturns)
  let winner=null;
   let gameboard=[...playerBoard.map(item=>[...item])]
   for(const turn of gameturns){
        const {square,player}=turn
        const {row,col}=square
        gameboard[row][col]=player
    }
  for(const comb of WINNING_COMBINATIONS){
    const firstSquare=gameboard[comb[0].row][comb[0].column]
    const secondSquare=gameboard[comb[1].row][comb[1].column]
    const thirdSquare=gameboard[comb[2].row][comb[2].column]
    if(firstSquare && firstSquare===secondSquare && firstSquare===thirdSquare){
      winner=players[firstSquare];
    }
    
  }
  //const[activePlayerSymbol,setactivePlayerSymbol]=useState('X')
  function restartBoard(){
    setGameTurns([])
  }
  function handlePlayerName(symbol,newName){
    setPlayers(prevname=>{
      
      return {...prevname,[symbol]:newName}
    })
  }
 
  function handleActivePlayer(rowIndex,columnIndex){
   //setactivePlayerSymbol((oldOne)=>oldOne==='X'?'O':'X') 

   setGameTurns((prevTurns)=>{
       const currentPlayer=handleTurns(prevTurns)
        const updatedTurns=[{square:{row:rowIndex,col:columnIndex},player:currentPlayer},...prevTurns,]
        return updatedTurns
   })
   
  }
  const isDraw=gameturns.length>=9 && !winner
  console.log(players)

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
         <Player name="Player 1" symbol="X" isActive={activeTurns==='X'} setName={handlePlayerName}/>
          <Player name="Player 2" symbol="O" isActive={activeTurns==='O'}setName={handlePlayerName}/>
        </ol>
        <GameBoard board={gameboard} handleWhichPlayer={handleActivePlayer}/>
      </div>
       {(winner|| isDraw) && <GameOver winner={winner} onSet={restartBoard}/>}
      <Log turns={gameturns}/>
    </main>
  )
}

export default App
