import React, { useEffect , useState} from 'react'; 


function UseEffectHook() {

  let [counter, setCounter] = useState(100)
       let [age, setAge] = useState(100)
       const [email, setEmail] = useState('bhat.baseer@gmail.com')
    // useEffect(() => {
    //     console.log("Component mounted. Senario -> Fetch API ");
    //   }, []);

      useEffect(() => {
        console.log("Component mounted. Senario -> Fetch API ");

        console.log('age is ' +age)
        setCounter(counter+1)
        age = setAge(counter)
      },[email,age]);
        
    // useEffect(() => {
    //     console.log("Component mounted. Senario -> Fetch API ");
    //   }, [element]);

    
  return (
    <div>useEffectHook</div>
  )
}

export default UseEffectHook