import './App.css';
import { useState } from 'react';
const App = () => {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 10);
  }

  const removeValue = () => {
    setCounter(counter - 10);
  }

  return(
    <>
    <h1>Helooooooo {counter}</h1>
    <button onClick={addValue}>HellooClick</button>
    <br />
    <button onClick={removeValue}>RemoveClick</button>
    </>
  )
}

export default App;