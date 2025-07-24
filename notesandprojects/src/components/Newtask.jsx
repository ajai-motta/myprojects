import { useState } from "react"

export default function Newtask({addTask}){
    const [enteredValue,setEnteredValue]=useState('')
    let cssclasses="w-64 px-2 py-1 rounded-sm bg-stone-200"
    function handleInput(event){
        setEnteredValue(event.target.value)
    }
    function handleClick(){
        if(enteredValue.trim()===''){
          
            
            return
        }
        addTask(enteredValue)
        setEnteredValue('')
    }
    return <div className="flex items-center gap-4 my-2">
        <input type="text" className={cssclasses} onChange={handleInput} value={enteredValue}/>
        <button className="text-slate-700 hover:text-stone-950 bg-stone-500" onClick={handleClick}>Add Task.</button>
    </div>
}