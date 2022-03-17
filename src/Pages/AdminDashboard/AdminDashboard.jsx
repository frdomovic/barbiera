import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo_white from '../../Assets/Images/logo_white.png'
//
import { getUsername, removeUserSession } from '../../Auth/SessionFunctions'
import AddService from './Services/AddingServices/AddServices'
import AddWorker from './Services/AddWorker'
import ChangeDays from './Services/DayAndTimeChanges/ChangeDays'
import Schedule from './Services/Schedule'
import UserDetails from './Services/UserDetails'
//

export default function AdminDashboard () {
  const [id, setId] = useState(1)
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
        <div className='h-4/5 mt-2 ml-5 mr-5 mb-5 lg:m-5 bg-yellow-500 bg-opacity-10'>
          <div className='w-full mt-2 grid grid-cols-5 text-center cursor-pointer'>
            <div className='hover:text-yellow-400' onClick={() => setId(1)}>
              RASPORED
            </div>
            <div className='hover:text-yellow-400' onClick={() => setId(2)}>
              DODAVANJE DJELATNIKA
            </div>
            <div className='hover:text-yellow-400' onClick={() => setId(3)}>
              PROMJENA RADNIH DANA
            </div>
            <div className='hover:text-yellow-400' onClick={() => setId(4)}>
              PODACI KORISNIKA
            </div>
            <div className='hover:text-yellow-400' onClick={() => setId(5)}>
              USLUGE
            </div>
          </div>
          <div className='h-9/10 mt-3 ml-2 mr-2 rounded-lg bg-black bg-opacity-40'>
            {
              {
                1: <Schedule />,
                2: <AddWorker />,
                3: <ChangeDays />,
                4: <UserDetails />,
                5: <AddService />
              }[id]
            }
          </div>
        </div>
      </div>
    </div>
  )
}
