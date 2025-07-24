import { createPortal } from "react-dom";
import { useRef,useImperativeHandle,forwardRef } from "react";
import Button from "./Button.jsx";
const Model=forwardRef(function Model({children,label},ref){
    const dialogRef=useRef()
useImperativeHandle(ref,()=>{
    return{
        open(){
            dialogRef.current.showModal()
        }
    }
})
return createPortal(
    <dialog ref={dialogRef} className="backdrop:bg-stone-900/9 p-4 rounded-md shadow-md">
    {children}
    <form method="dialog" className="justify-center flex"><Button >{label}</Button></form>
    </dialog>
    ,document.getElementById("modal-root"))
})
export default Model;