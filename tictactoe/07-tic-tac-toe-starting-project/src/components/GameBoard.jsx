import { useState } from "react";

export default function GameBoard({board,handleWhichPlayer}){
   
   /* const [gameboard,setgameboard]=useState(playerBoard)
    function handleSymbol(rowIndex,columnIndex){
        setgameboard((previousBoard)=>{ 
            const copyBoard=[...previousBoard.map(item=>[...item])]
            copyBoard[rowIndex][columnIndex]=passSymbol
        return copyBoard 
        })*/
    
    
    return (
        <ol id="game-board">
            {board.map((row,rowIndex)=>
                <li key={rowIndex}>
                    <ol>
                    {row.map((column,columnIndex)=>
                    <li key={columnIndex}>
                        <button onClick={()=>{handleWhichPlayer(rowIndex,columnIndex) }} disabled={column!==null}>{column}</button></li>
                    
                    )}
                    </ol>
                </li>
            )}
        </ol>
    )
}