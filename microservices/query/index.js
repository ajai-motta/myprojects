const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const axios=require('axios')
//
function handleSenario(type,data){
if(type==="PostCreated"){
    const {id,title}=data;
    posts[id]={id,title,Comments:[]}
 }
 if(type==='CommentCreated'){
 const {id,
    content,
    postId,status}=data;
    posts[postId].Comments.push({id,content,status})
 }
 if(type==="CommentUpdated"){
   
   const{
            id,
            postId,
            content,
            status
           }=data;
           const post=posts[postId]
           const comment=post.Comments.find((com)=>{
            return com.id===id
           })
           comment.status=status;
           comment.content=content

 }
}
//
const app=express()
app.use(cors())
app.use(bodyParser.json())
const posts={}
app.get('/posts',(req,res)=>{
 res.send(posts)
})
app.post('/events',(req,res)=>{
const {type,data}=req.body;
 handleSenario(type,data)
 
 res.send({})
})
app.listen(4002,async()=>{
    console.log('listening to app 4002');
    const res=await axios.get('http://localhost:4005/events')
    for(let event of res.data){
      console.log('procesing Event', event.type)
      handleSenario(event.type,event.data)
    }
})