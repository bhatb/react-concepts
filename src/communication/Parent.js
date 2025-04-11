import React from 'react'
import Child from './Child';
function Parent() {
   const message = "Hello from Parent!";
  const user = { name: "John", age: 30 };

  const handleGreet = (name) => {
    alert(`Hello, ${name}!`);
  };
  return (
    <div><h1>Parent</h1>
    <Child message={message} user={user} onGreet={handleGreet}/>
    
    </div>

  )
}

export default Parent