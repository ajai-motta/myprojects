import React,{useState} from "react";
import axios from 'axios'
export default function CommentCreate ({postId}){
    const [title,setTitle]=useState('')
    const handleSubmit=async (e)=>{
        e.preventDefault()
        await axios.post(`http://localhost:4001/posts/${postId}/comments`,{
            content : title
        })
        setTitle('')


    }
    return <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>New comment</label>
                <input className="form-control" onChange={e=>setTitle(e.target.value)}/>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>

    </div>
}