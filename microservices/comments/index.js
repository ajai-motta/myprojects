const express=require('express')
const {randomBytes}=require('crypto')
const bodyParser=require('body-parser')
const cors =require('cors')
const axios=require('axios')

const app=express()
const commentsByPostId={}
app.use(cors())
app.use(bodyParser.json())
app.get('/posts/:id/comments',(req,res)=>{
res.send(commentsByPostId[req.params.id]||[])
})

app.post('/posts/:id/comments',async (req,res)=>{
const id=randomBytes(4).toString('hex')
const comments=commentsByPostId[req.params.id]||[]
const {content}=req.body
commentsByPostId[req.params.id]=[...comments,{id,content,status:'pending'}]
console.log(commentsByPostId)

await axios.post('http://localhost:4005/events',{
    type: 'CommentCreated',
    data:
    {
    id,
    content,
    postId: req.params.id,
    status:'pending'
    }
}).catch((err)=>{
    console.log(err.message)
})
res.status(201).send(commentsByPostId[req.params.id])
})

app.post('/events',async(req,res)=>{
    const {type,data}=req.body;
    if(type==='CommentModerated'){
        const {id,postId,status,content}=data;
        const mycomment=commentsByPostId[postId];
        const comment=mycomment.find(comment=>{
            return comment.id===id
        })
        comment.status=status;
        await axios.post('http://localhost:4005/events',{
           type: 'CommentUpdated',
           data:{
            id,
            postId,
            content,
            status
           }

        })
    }
    res.send({})
})
app.listen(4001,(err)=>{
    if(err) return console.log("an error occured on port 4001")
    console.log("App listening to port 4001")
})