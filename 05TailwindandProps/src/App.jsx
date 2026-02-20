import { useState } from 'react'
import './App.css'
import Card from './components/card'
function App() {
  
  let myObj = {
    naam : 'shivm',
    clas : 13
  }
  let myarr = [4,5,6,7]

  return (
    <>
      <h1 className='bg-red-600 p-4 rounded-3xl'>Tailwind Test</h1>
      <div className='flex flex-row gap-10'>
    <Card name='Shivam' hashId='567' anObj={myObj} myarr={myarr} />
    <Card name='Vridhi' hashId='568'/>
    <Card hashId='569'/>
  </div>
    </>
  )
}

export default App
