import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {


  return (
    <div className='w-full h-screen bg-blue-300 flex flex-col gap-4 items-center justify-center'>
      <h1 className='font-bold text-4xl'>Home</h1>
      <Link to="/login">
      <button type='button' className='bg-blue-500 w-24 text-white py-3 rounded-md hover:bg-blue-700' >Login</button>
      </Link>
      <Link to="/register">
      <button type='button' className='bg-green-700 w-24 text-white py-3 rounded-md hover:bg-green-900' >Register</button>
      </Link>
    </div>
  )
}

export default Home
