export default function Input({textArea,label,ref,...props}){
    const classses="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-300 text-stone-600 focus:outline-none focus:border-stone-600"
    return(
        <div className="flex gap-1 flex-col my-4 h-full">
            <label className=" text-sm font-bold uppercase text-stone-500 block">{label}</label>
            {textArea? (<textarea ref={ref} className={classses} {...props}/>):(<input ref={ref} className={classses} {...props}/>)}
        </div>
    )
}