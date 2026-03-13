import { useState } from 'react'
import './App.css'
import Game from './components/game'


function App() {
  const [start,setRestart] = useState('START')
  const [active, setActive] = useState(null)
  const [userTurn, setUserTurn] = useState(false)
  const [startBtn, setStartBtn] = useState(false)
  const [sequence, setSequence] = useState([])
  const [userStep, setUserStep] = useState(0)
  const [score, setScore] = useState(0)
  const [status, setStatus] = useState('Click Start!')

  const sequenceArray = () =>{
  let arr = []
  for(let i=0;i<4;i++){
    arr.push( Math.floor(Math.random()*6+1))
  }
  return arr
}

const previewSequence = ()=>{
  setUserTurn(false)
  setStartBtn(true)
  setRestart('RESTART')
   const seq = sequenceArray()
   setSequence(seq)
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
    setUserTurn(true)
    setStartBtn(false)
   }
   }, 1000)

}



  return (
   <>
   <div className='flex flex-col select-none'>
    <p className='text-center text-2xl mb-2'>score : {score}</p>
   <h1 className='text-5xl text-center'>{status}</h1>
   <Game active={active}
         setActive={setActive}
         userTurn={userTurn}
         seqArr={sequence}
         userStep={userStep}
         setUserStep={setUserStep} 
         setStatus={setStatus}
         score={score}
         setScore={setScore}
         setRestart={setRestart}
         setUserTurn={setUserTurn} />
   <button onClick={()=>{
                         previewSequence();
                         setUserStep(0)
                         
                        }} 
           className='start bg-blue-700'
           disabled={startBtn} >{start}</button>
   </div>
   </>
  )
}

export default App
