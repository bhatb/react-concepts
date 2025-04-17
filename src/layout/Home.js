import React, { useEffect, useState } from 'react'
import { todo } from '../entities/todo'
const Home = () => {

  const [todo, setItem] =useState({})

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        
        console.log(json)
      setItem(json);
      })
  
    return () => {
       
    }
  }, [])
  

  return (
    <>
    <h1>Ract Tutorials</h1>

    <p>User Id: {todo.userId}</p>
    <p>Id: {todo.id}</p>
    <p>Title: {todo.title}</p>
    <p>Completed: {todo.completed}</p>
     
    </>
  )
}

export default Home