import Newtask from "./Newtask.jsx"
export default function Tasks({addTask,tasks,deleteTask}){
    return<section>
        <h1 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h1>
          <Newtask addTask={addTask}/>
        {tasks.length===0 && (<p className="text-stone-800 my-4">This project doese not have any tasks Yet.</p>)}
        {tasks.length>0&&(<ul className="p-4 mt-4 rounded-md bg-stone-300">
          {tasks.map(task_item=>
            
              (
              <li key={task_item.id} className="flex justify-between my-4"><span>{task_item.text}</span>
              <button className="text-stone-700 hover:text-red-500" onClick={()=>deleteTask(task_item.id)}>Clear</button>
              </li>
             
            )
            
          )}
        </ul>)}
    </section>
}