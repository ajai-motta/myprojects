import Button from "./Button"
export default function ProjectSideBar({onset,projects,onSelect}){
    return <aside className="w-1/3 py-8 px-16 bg-stone-900  text-stone-50 md:w-72 rounded-r-xl">
        <h1>Your Projects</h1>
        <div>
            <Button onClick={onset}>
             + Add Project.
            </Button>
        </div>
        {console.log(projects)}
        <div>
            <ul className="mt-8">
                {projects.map(projectLoopContent=>{
                    const buttonid=projectLoopContent.id
                    return(
                    <li key={buttonid}>
                         <button onClick={()=>onSelect(buttonid)}className="w-full text-left px-2 py-1 rounded-md my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">{projectLoopContent.title}</button>
                    </li>)
                })}
            </ul>
        </div>
    </aside>
}