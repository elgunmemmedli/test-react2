import React, { useEffect } from 'react'
import Form from '../Components/LeftBarComponents/Form'
import { signUp } from '../API/api'


export default function Login() {
//   useEffect(()=>{
//     // console.log(window.history);
    
// // signUp()
//   },[])
  return (
    <div className='bg-blue-500 h-[100vh] flex justify-center items-center'>
        <Form/>
    </div>
  )
}
