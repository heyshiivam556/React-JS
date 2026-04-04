import React from 'react'
import { useState } from 'react';
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'; 



function Auth() {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const signInWithEAP = async () =>{
    try{
    await createUserWithEmailAndPassword(auth,Email,Password)
    console.log('signed in');
    
    }catch(err){
      console.error(err)
    }
  }
  const signInWithGoogle = async () =>{
    try {
      await signInWithPopup(auth,googleProvider)
          console.log('signed in');
    } catch (err) {
      console.error(err);
      
    }
  }
  const logOut = async () => {
    try {
      await signOut(auth)
      console.log('logged out');
      
    } catch (err) {
      
    }
  }
  
  return (
    <div className='flex flex-col m-2'>
        <input type="text" placeholder='Email...' onChange={(e)=>setEmail(e.target.value)} value={Email} className='h-10 bg-black m-1 p-2 rounded'/>
        <input type="text" placeholder='pswd...' onChange={(e)=>setPassword(e.target.value)} value={Password} className='h-10 bg-black m-1 p-2 rounded'/>
        <button onClick={signInWithEAP} className='bg-yellow-900'>sign in</button>
        <button onClick={signInWithGoogle} className='bg-blue-900'>Google Sign In</button>
        <button style={{background:'red'}} onClick={logOut} className='bg-red-700'>Log Out</button>
    </div>
  )
}

export default Auth