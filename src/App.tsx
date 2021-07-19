import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'

import './App.css'

export type UserStateItem = {
  id: number,
  username: string,
  avatar: string
}[]

export type UsersProps = {
  users: UserStateItem[],
  setCurrentUser: () => {},
  currentUser: string
}

export type CommentsProps = {
  id: number,
  content: string,
  userId: number, 
  postId: number
}

export type PostsProps = {
  comments : CommentsProps[],
  content: string,
  id: number,
  image: {src: string, alt: string},
  likes: number,
  title: string,
  userId: number
}[]



function App() {


  
  const [users, setUsers] = useState<UserStateItem[]>([])
  const [posts, setPosts] = useState<PostsProps[]>([])
  const [currentUser, setCurrentUser] = useState("Picasso")


  useEffect(() => {
    fetch("http://localhost:4000/users").then(resp => resp.json()).then(setUsers)
  
  },[])

  useEffect(() => {
    fetch("http://localhost:4000/posts").then(resp => resp.json()).then(setPosts)
   
  },[])


  return (
    <div className="App root">
      { console.log(posts)}
     <Header users={users} setCurrentUser={setCurrentUser} currentUser={currentUser}/>
     <Main users={users} posts={posts} setPosts={setPosts} currentUser={currentUser}/>
    </div>
  )
}

export default App
