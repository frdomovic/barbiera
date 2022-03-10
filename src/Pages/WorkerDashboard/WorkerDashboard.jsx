import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CalendarComponent } from '@syncfusion/ej2-react-calendars'
import {
  getToken,
  getUsername,
  removeUserSession
} from '../../Auth/SessionFunctions'

export default function WorkerDashboard () {
  const [dateSelected, setDateSelected] = useState(new Date())
  const navigate = useNavigate()
  const handlelogout = () => {
    removeUserSession()
    navigate('/login', { replace: true })
  }
  return (
    <div className='w-full h-full flex flex-col justify-cetner items-center text-white'>
      <div className=' h-screen/0 w-4/5 mt-10 bg-black bg-opacity-40 rounded-3xl'>
        <CalendarComponent></CalendarComponent>
      </div>
    </div>
  )
}
