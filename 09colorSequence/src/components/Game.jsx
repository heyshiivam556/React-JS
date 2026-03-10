import React from 'react'
import './Game.css'

function Game({active}) {
  return (
    <>
    <div className='container'>
        <div className={`tiles tile1 bg-green-500
        ${active === 1?'clicked':''}`}>1</div>
        <div className={`tiles tile2 bg-amber-600
        ${active === 2?'clicked':''}`}>2</div>
        <div className={`tiles tile3 bg-blue-500
        ${active === 3?'clicked':''}`}>3</div>
        <div className={`tiles tile4 bg-red-500
        ${active === 4?'clicked':''}`}>4</div>
        <div className={`tiles tile5 bg-cyan-400
        ${active === 5?'clicked':''}`}>5</div>
        <div className={`tiles tile6 bg-purple-500
        ${active === 6?'clicked':''}`}>6</div>
    </div>
    </>
  )
}

export default Game