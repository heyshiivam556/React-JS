import { useState } from 'react'
import React from 'react'
import './Game.css'

function Game({active,setActive, userTurn, seqArr, userStep, setUserStep, score, setScore, setStatus, setRestart, setUserTurn}) {
  


  const checkTileClick = (e)=>{
    
    
    if(e == seqArr[userStep]){ 
      setScore(score+1)
      console.log(e);
    }
    else {
      setStatus('You Lose!😥')
      setScore(0)
      setRestart('START')
      
    }
    setUserStep(userStep+1)
setActive(e)
    setTimeout(()=>{
    setActive(null)
   },300)

    if(userStep+1 == seqArr.length){ 
      console.log('you Win')
      setStatus('You Won!🤩')
      setScore(score+2)
      setUserTurn(false)
    };
    

    }
  
  
  return (
    <>
    <div className='container'>
        <div className={`tiles tile1 bg-green-500
        ${active === 1?'clicked':''}`}
        onClick ={()=>{
          if(!userTurn) return
          checkTileClick(1)
        }}>1</div>

        <div className={`tiles tile2 bg-amber-600
        ${active === 2?'clicked':''}`}
        onClick ={()=>{
          if(!userTurn) return
          checkTileClick(2)
        }}>2</div>

        <div className={`tiles tile3 bg-blue-500
        ${active === 3?'clicked':''}`}
        onClick ={()=>{
          if(!userTurn) return
          checkTileClick(3)
        }}>3</div>

        <div className={`tiles tile4 bg-red-500
        ${active === 4?'clicked':''}`}
        onClick ={()=>{
          if(!userTurn) return
          checkTileClick(4)
        }}>4</div>

        <div className={`tiles tile5 bg-cyan-400
        ${active === 5?'clicked':''}`}
        onClick ={()=>{
          if(!userTurn) return
          checkTileClick(5)
        }}>5</div>

        <div className={`tiles tile6 bg-purple-500
        ${active === 6?'clicked':''} `}
        onClick ={()=>{
          if(!userTurn) return
          checkTileClick(6)
        }}>6</div>

    </div>
    </>
  )
}

export default Game