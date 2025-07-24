import React,{useState} from "react";
import axios from 'axios'
export default function PostsCreate ({handleChange}){
    const [title,setTitle]=useState('')
    const handleSubmit=async (e)=>{
        e.preventDefault()
        await axios.post('http://localhost:4000/posts',{
            title
        })
        setTitle('')
        handleChange(prev=>{
            return !prev
        })

    }
    return <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="from-group">
                <label >Title</label>
                <input className="form-control" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>

    </div>
}