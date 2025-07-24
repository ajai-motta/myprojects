import React,{useState,useEffect} from "react";
import axios from "axios";

export default function CommentList({comments=[]}){
   

     
    return<div>
        <ul>
            {comments.map(comment=>{
                 let content;
   if(comment.status==='rejected'){
    content="This comment is still being moderated"
   }
    else if(comment.status==='pending'){
    content="This comment is rejected by the system"
   }
   else if(comment.status==='approved'){
    content=comment.content;
   }
   else{
    content="test case error"
   }
            return <li key={comment.id}>{content}</li>
        })}
        </ul>
        
    </div>
}