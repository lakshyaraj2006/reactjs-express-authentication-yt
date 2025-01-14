import React from 'react'

const Home = () => {
  return (
    <div className='container px-8 my-3'>
        <div className='bg-base-300 p-4 rounded text-center py-16'>
            <h1 className='font-bold text-3xl'>Welcome to MERN Stack Auth!</h1>
            <button className='btn btn-primary mt-8'>Logout</button>
        </div>
    </div>
  )
}

export default Home