export default function Button({children,...props }){
    return(
         <button  className="text-stone-400 px-9 py-4 bg-stone-700 text-xs hover:bg-stone-600 hover:text-stone-800 rounded-sm" {...props}>
             {children}
            </button>
    )
}
