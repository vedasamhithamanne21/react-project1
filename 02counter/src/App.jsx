import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(0)
  //let counter = 15

  const addValue = () => {
   setCounter((prevCounter) => prevCounter + 1)
  }
  const removeValue = () => {
    
   
    setCounter((prevCounter) => prevCounter - 1)
  }
  const clearCounter = () => {
    setCounter(0);
  }
  
  return (
    <>
      <h1>React course with ME {counter}</h1>
      <h2>Counter value : {counter} </h2>
      <button
      onClick={addValue}
      >Add value</button> {" "}
      <button
      onClick={removeValue}
      >remove value</button>
      <button 
      onClick = {clearCounter}>Reset</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App