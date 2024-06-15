import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  //let counter = 15
   const addValue = () => {
    //counter = counter +1
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)

   }

   const removeValue = () =>{
    setCounter(counter -1)
   }

  

  return (
    <>
<h1>Hello</h1>
<h2>Counter value: {counter}</h2>
<button onClick={addValue}> Add Value{addValue}</button>
<br />
<button onClick={removeValue}>Remove vlue{counter}</button>
<p>footer: {counter}</p>
    </>
  )
}

export default App
