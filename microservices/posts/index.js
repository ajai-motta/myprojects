const express=require('express')
const {randomBytes}=require('crypto')
const bodyParser=require('body-parser')
const axios=require('axios')
const cors=require('cors')
const app=express()

app.use(bodyParser.json())
app.use(cors())
const posts={};

app.post('/posts',async(req,res)=>{
const id=randomBytes(4).toString('hex')
const {title}=req.body;
posts[id]={id,title}
await axios.post('http://localhost:4005/events',{
    type:"PostCreated",
    data:{
        id,title
    }
})
res.status(201).send(posts[id])
})

app.get('/posts',(req,res)=>{
res.send(posts)
})
app.post('/events',(req,res)=>{
    console.log(req.body.type)
    res.send({})
})

app.listen(4000,(err)=>{
    if (err) return console.log("an error acccured on server")
    console.log('App Listening on port 4000')
})