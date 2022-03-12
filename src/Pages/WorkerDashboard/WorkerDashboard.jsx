import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo_white from '../../Assets/Images/logo_white.png'
import { getUsername, removeUserSession } from '../../Auth/SessionFunctions'

export default function WorkerDashboard () {
  const navigate = useNavigate()
  const handlelogout = () => {
    removeUserSession()
    navigate('/login', { replace: true })
  }
  return (
    <div className='w-full h-full flex justify-center items-center text-white'>
      <div className='flex flex-col h-screen/0 w-4/5 mt-10 bg-black bg-opacity-40 rounded-3xl'>
        <div className='w-full h-14 lg:h-20 mt-5 pl-5 pr-5 flex flex-row justify-between rounded-lg'>
          <div className='h-10 ml-5 flex text-white text-lg font-bold'>
            <div className='h-14 w-14 mt-2 rounded-full bg-green-800 bg-opacity-70 flex justify-center items-center'>
              <img src={logo_white} alt='logo' className='h-10 w-10' />
            </div>
            <span className='mt-5 ml-2'>
              ADMIN:{' '}
              <span className='ml-2 text-yellow-400'>
                {JSON.parse(getUsername())}
              </span>
            </span>
          </div>
          <div className='w-48 h-10 mt-5'>
            <button
              type='button'
              className='w-32 mt-1 ml-10 bg-yellow-600 bg-opacity-60 rounded-3xl shadow-2xl hover:bg-transparent hover:border hover:border-solid hover:border-yellow-200'
              onClick={() => handlelogout()}
            >
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
