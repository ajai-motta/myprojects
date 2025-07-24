import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostsCreate from './components/PostsCreate'
import PostsList from './components/postsList'

function App() {
  const [shouldReload,setShouldReload]=useState(true)
  
  return <div className='container'>
    <h1>Create Posts</h1>
    <PostsCreate handleChange={setShouldReload}/> 
    <h2>Posts List.</h2>
    <PostsList/>
  </div>
}

export default App
