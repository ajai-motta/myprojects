import Tasks from "./tasks";

export default function SelectedProject({project,onDelete,addTask,tasks,deleteTask}){
   const formattedDate = new Date(project.duedate).toLocaleDateString('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

    return <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl mb-4 text-stone-600 font-bold">{project.title}</h1>
                <button className="text-stone-300 px-6 py-2 bg-stone-700 rounded-sm hover:text-stone-950 hover:bg-stone-600" onClick={onDelete}>Delete</button>
            </div>
            <p className="mb-4 text-stone-400">{formattedDate}</p>
            <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
        </header>
        <Tasks addTask={addTask} tasks={tasks} deleteTask={deleteTask}/>
    </div>
}