
import NewProjectBody from "./components/NewprojectBody";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSideBar from "./components/ProjectSideBar";
import SelectedProject from "./components/SelectedProject.jsx";
import { useState } from "react";
function App() {
const [project,setProject]=useState({
  selectedProjectId: undefined,
  projects:[],
  tasks:[],
})
function handleContent(){
  setProject(prevPro=>{
   return{
    ...prevPro,
    selectedProjectId:null,
   }
  })
}
function handleSelectedProject(id){
     setProject(prevPro=>{
   return{
    ...prevPro,
    selectedProjectId:id,
   }
  })
  }


function handleTaskInputs(task_value){
setProject(prevProjects=>{
  const newTask={
    text:task_value,
    projectId:prevProjects.selectedProjectId,
    id: Math.random()
  }
  
return{
    ...prevProjects,
    tasks:[newTask,...prevProjects.tasks]
    }
})



} 
function handleCancel(){
  setProject(prevPro=>{
   return{
    ...prevPro,
    selectedProjectId:undefined,
   }
  })
}
function handleDeleteTask(T_id){
setProject((prev=>{
  return {
    ...prev,
    tasks: prev.tasks.find(item=>T_id!==prev.tasks.id)
  }
}))
}
const handleAddContent=(obFromNewProjectBody)=>{
setProject(prevProjects=>{
  const newProjectToBeReturned={
    ...obFromNewProjectBody,
    id: Math.random()
  }
  
return{
    ...prevProjects,
    selectedProjectId:undefined,
    projects:[...prevProjects.projects,newProjectToBeReturned]
    }
})
}
const findedValue=project.projects.find((pro)=>pro.id===project.selectedProjectId)

let content=<SelectedProject 
project={findedValue}
 onDelete={handleDelete}
  addTask={handleTaskInputs}
  tasks={project.tasks}
  deleteTask={handleDeleteTask}
  />;

if(project.selectedProjectId===null){
content=<NewProjectBody onAdd={handleAddContent} onCancel={handleCancel}/>

}
else if(project.selectedProjectId===undefined){
  content=<NoProjectSelected onset={handleContent}/>

}
function handleDelete(){
  setProject(prevPro=>{
   return{
    ...prevPro,
    selectedProjectId:undefined,
    projects: prevPro.projects.filter((instanceObj)=>{
      return instanceObj.id!==prevPro.selectedProjectId
    })
   }
  })
}
  return (
    <main className="h-screen my-8 flex gap-8">
    <ProjectSideBar onset={handleContent} projects={project.projects} onSelect={handleSelectedProject} />
    {content}
    </main>
      
  );
}

export default App;
