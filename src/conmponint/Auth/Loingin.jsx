import React, { useContext, useState } from 'react'
import { AuthContexts } from '../../context/AuthContext'

const Loingin = ({HandlerLogin}) => {

  

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const FomeHandler = (e) => {
    e.preventDefault()
    HandlerLogin(email,password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className='h-screen w-full bg-gray-950 flex items-center justify-center text-white'>
      <form onSubmit={(e) => {
        FomeHandler(e)
      }} className='w-3/4 lg:w-2/4 bg-gray-900 rounded-2xl gap-5 flex flex-col p-8'>
        <h1 className='font-bold text-3xl'>Login</h1>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }} type="email" placeholder='Email' className='border border-emerald-800 py-2 px-3 rounded-2xl outline-0' />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }} type="password" placeholder='Password' className='border border-emerald-800 py-2 px-3 rounded-2xl outline-0' />
        <div className='flex items-center justify-between'>
          <input type="checkbox" />
          <a href="#" className='text-sm text-gray-500'>Forget password</a>
        </div>
        <button className= 'active:scale-95 bg-red-600 py-2 rounded-full'>Submit</button>
      </form>
    </div>
  )
}

export default Loingin
