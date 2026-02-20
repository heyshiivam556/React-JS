import { useState } from 'react'
import './App.css'

function App() {
 let [count,setCount] = useState(5)

  // let count = 5

  // let increament = () =>{
  //   console.log(count);
  //   count += 1 // the value will update but not in the DOM. thus we use hooks
    
  // }
  let increament = () =>{
    if(count < 20)
    setCount(++count)
  }
  let decreament = () =>{
    if(count >0)
    setCount(--count)
  }
  return (
    <>
     <div>
      <h2>This is a Counter , count: {count}</h2>
      <button onClick={increament}>Increase</button>
      <br /><br />
      <button onClick={decreament}>Decrease</button>
      <p>count: {count}</p>
     </div>
    </>
  )
}

export default App
