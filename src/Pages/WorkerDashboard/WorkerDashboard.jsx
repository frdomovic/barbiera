import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  getToken,
  getUsername,
  removeUserSession
} from '../../Auth/SessionFunctions'

export default function WorkerDashboard () {
  const navigate = useNavigate()
  const handlelogout = () => {
    removeUserSession()
    navigate('/login', { replace: true })
  }
  return (
    <div className='w-full h-full flex flex-col justify-cetner items-center text-white'>
      <div className='flex flex-row justify-between h-screen/0 w-4/5 mt-10 bg-black bg-opacity-40 rounded-3xl'>
        <div className='w-full h-20 mt-5 flex flex-row justify-between'>
          <div className='h-10 ml-5 text-white text-lg font-bold'>
            Djelatnik:{' '}
            <span className='ml-2 text-yellow-400'>{getUsername()}</span>
          </div>
          <div className='w-48 h-10 flex justify-center items-center'>
            <button
              type='button'
              className='w-32 bg-yellow-600 bg-opacity-60 rounded-3xl'
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
