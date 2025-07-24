import React,{useState,useEffect} from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
export default function PostsList(){
    const [posts,setPosts]=useState({})
    const fetchPosts=async()=>{
        const res=await axios.get('http://localhost:4002/posts')
        console.log(res.data)
        setPosts(res.data)

    }
    useEffect(()=>{
        fetchPosts()
    },[])
    console.log(posts)
    return <div className="container mt-4">
  <div className="row justify-content-center">
    {Object.values(posts).map((post) => (
      <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={post.id}>
        <div className="card shadow-sm h-100">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <CommentList comments={post.Comments}/>
            <CommentCreate postId={post.id}/>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
}