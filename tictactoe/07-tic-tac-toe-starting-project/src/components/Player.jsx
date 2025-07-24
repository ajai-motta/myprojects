import { useState } from "react"

export default function Player({name,symbol,isActive,setName}){
    const [isEditing,setIsEditing]=useState(false);
    const [playerName,setPlayerName]=useState(name)
    const handleClick=()=>{
        setIsEditing((edit)=>!edit)
       if(isEditing){
        setName(symbol,playerName)
        
       }
    }
    const handleInputEvent=(e)=>{
      setPlayerName(e.target.value)
    }
    let spanClas=<span className="player-name" >{playerName}</span>
    if (isEditing){
       spanClas=<input type='text' required value={playerName} onChange={handleInputEvent}/>
    }
    return(
         <li className={isActive ? 'active': undefined}>
            <span className="player">
            {spanClas}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick} >{isEditing ? 'Save': "Edit"}</button>
          </li>
    )
}