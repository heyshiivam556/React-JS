import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [characters,setharacters] = useState(true)
  const [numbers,setNumbers] = useState(false)
  const [symbols,setSymbols] = useState(false)

  const [password,setPassword] = useState('')

  // useRef hook to connect the text area to a variable.
  const passRef = useRef(null)

  // Password generator is dependant on varous things, thus we use this hook to change if the variables get changed
  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numbers) str += '0123456789'
    if(symbols) str += '!@#$%^&*+-=.?~'

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)  
  
  },[length,characters,numbers,symbols,setPassword])

  const copyToClipboard = useCallback(()=>{
    passRef.current?.select()   // selects the text under the input value
    // passRef.current?.setSelectionRange(0,4) // selects only the range
    window.navigator.clipboard.writeText(passRef.current.value)
    // window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,characters,numbers,symbols,passwordGenerator])

  return (
    <>
      <div className="container bg-blue-950 p-10 rounded-4xl">
        <h1 className='mb-10 m-4'>Password Generator</h1>
        <div className="ps-area flex gap-1">
          <input ref={passRef} className="text-box w-100 h-10 text-2xl rounded-md p-4 text-amber-950 flex items-center  bg-amber-50" value ={password}/>
          <button className='bg-blue-600 '
                  onClick={copyToClipboard}>Copy</button>
        </div>
        <div className="options mt-6.5">
          <div className='flex iems-center gap-2 mt-4'>
          <input type="range"
                 className='w-50'
                 min={8} max={25}
                 onChange={(e)=>{setLength(e.target.value)}} />
          <label> Length: {length}</label>
        </div>
        <div className='flex iems-center gap-2 mt-4'>
          <input type="checkbox"
                 className='w-5' 
                 defaultChecked = {numbers}
                 onChange={()=>{setNumbers((numbers) => !numbers)}} />
          <label >Numbers</label>       
        </div>
        <div className='flex iems-center gap-2 mt-4'>
          <input type="checkbox"
                 className='w-5' 
                 defaultChecked = {symbols}
                 onChange={()=>{setSymbols((symbols) => !symbols)}} />
          <label >Symbols</label>       
        </div>
        
        </div>
      </div>
    </>
  )
}

export default App
