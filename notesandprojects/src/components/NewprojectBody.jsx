import Input from "./Input"
import { useRef } from "react"
import Model from "./Model"
export default function NewProjectBody({onAdd,onCancel}){
    const modelRef=useRef()
    const titleRef=useRef()
    const descriptionRef=useRef()
    const dueDateRef=useRef()
    const handleSaveButton=()=>{
    //condition to cheack of fields are blank.
    if(titleRef.current.value.trim()===''|| descriptionRef.current.value.trim()===''||dueDateRef.current.value.trim()===''){
        modelRef.current.open()
        return
    }
     //This is a componebt that must be connected state in app   
        onAdd({ 
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            duedate: dueDateRef.current.value,}
        )
    }
    return(<>
    <Model ref={modelRef} label="Ok">
        <h1 className='text-xl font-bold text-stone-500 my-4'>Please Enter Valid Values.</h1>
    </Model>
        <div className="w-[35rem] mt-8">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                <li ><button onClick={handleSaveButton} className="bg-stone-800 hover:bg-stone-950 text-stone-50 px-6 py-2 rounded-md">Save</button></li>
            </menu>
            <div>
                <Input type="text" ref={titleRef} label="Title"/>
                <Input ref={descriptionRef} label="Description" textArea/>
                <Input type="date" ref={dueDateRef} label="Due Date"/>


            </div>
        </div>
        </>
    )
}