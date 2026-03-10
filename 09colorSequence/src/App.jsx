import { useState } from 'react'
import './App.css'
import Game from './components/game'


function App() {
  const [start,setRestart] = useState('START')
  const [active, setActive] = useState(null)

  const sequenceArray = () =>{
  let arr = []
  for(let i=0;i<4;i++){
    arr.push( Math.floor(Math.random()*6+1))
  }
  return arr
}

const startSequence = ()=>{
  setRestart('RESTART')
   const seq = sequenceArray()
  console.log(seq);
  
   let i = 0

   const interval = setInterval(() => {
   setActive(seq[i])
   setTimeout(()=>{
    setActive(null)
   },300) 

   i++
   
   if(i===seq.length){
    clearInterval(interval)
   }
   }, 1000)

}

  return (
   <>
   <div className='flex flex-col'>
   <h1 className='text-5xl text-center'>Color sequence</h1>
   <Game active={active}/>
   <button onClick={startSequence} className='start bg-blue-700'>{start}</button>
   </div>
   </>
  )
}

export default App
