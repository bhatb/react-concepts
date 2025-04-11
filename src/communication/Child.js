import React from 'react'
import GrandChild from './GrandChild'
function Child({message,age,onGreet}) {
  return (
    <div>Child

        <p>{message}</p>
        <button onClick={() => onGreet('Alice')}>Greet</button>
<GrandChild message={message} age={age}></GrandChild>


    </div>
  )
}

export default Child