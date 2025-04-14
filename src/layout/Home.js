import React, { useEffect, useState } from 'react'
import { todo } from '../entities/todo'
const Home = () => {

  const [item, setItem] =useState({})

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

    <p>User Id: {item.userId}</p>
    <p>Id: {item.id}</p>
    <p>Title: {item.title}</p>
    <p>Completed: {item.completed}</p>
     
    </>
  )
}

export default Home