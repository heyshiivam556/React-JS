import { useState } from "react";
import './Pallete.css'

function Pallete(){
const [color,setColor] = useState('')

  return (
    <>
    <div className='w-screen h-screen flex flex-row justify-center duration-500 ' 
    style={{backgroundColor:color}}>
      <h1>Color Project</h1>
      <div className='fixed w-100 flex bottom-10 justify-center'  id="pallete">
        <ul className='flex flex-row border-2 border-white rounded-2xl  gap-1.5 p-2'>
          <li className="color-buttons rounded-4xl" 
          style={{backgroundColor :'#66c5cc'}} 
          onClick={()=>setColor('#66c5cc')}>turquoise</li>
          <li className="color-buttons rounded-4xl"  
          style={{backgroundColor : '#f6cf71'}}
          onClick={()=>setColor('#f6cf71')}>gold</li>
          <li className="color-buttons rounded-4xl"  
          style={{backgroundColor : '#f89c74'}}
          onClick={()=>setColor('#f89c74')}>peach</li>
          <li className="color-buttons rounded-4xl"  
          style={{backgroundColor : '#dc80f2'}}
          onClick={()=>setColor('#dc80f2')}>lavender</li>
          <li className="color-buttons rounded-4xl"  
          style={{backgroundColor : '#87c55f'}}
          onClick={()=>setColor('#87c55f')}>lime</li>
          <li className="color-buttons rounded-4xl"  
          style={{backgroundColor : '#9eb9f3'}}
          onClick={()=>setColor('#9eb9f3')}>pastelblue</li>
          <li className="color-buttons rounded-4xl"  
          style={{backgroundColor : '#fe88b1'}}
          onClick={()=>setColor('#fe88b1')}>coral</li>
          <li className="color-buttons rounded-4xl"  
          style={{backgroundColor : '#c9db74'}}
          onClick={()=>setColor('#c9db74')}>magenta</li>
        </ul>
      </div>
      </div>
    </>
  )
}
export default Pallete