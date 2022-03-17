import React, { useState } from 'react'
import { getToken } from '../../../../Auth/SessionFunctions'

export default function FreeWorkerDays () {
  const [data, setData] = useState({
    employeeId: undefined,
    startHour: '',
    endHour: ''
  })
  const [addStatus, setAddStatus] = useState('')
  const handleSubmit = async e => {
    e.preventDefault()

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`
      },
      body: JSON.stringify(data)
    }
    await fetch('/admin-page/change-permanent-working-hour', requestOptions)
      .then(result => {
        if (result.status === 200) {
          setAddStatus('USPJEŠNO')
        } else {
          setAddStatus('ERROR')
        }
      })
      .catch(error => console.log('API  ERROR: ', error))
  }
  return (
    <div className='h-full w-full bg-black bg-opacity-40'>
      <h1 className='ml-5 pt-5'>PROMJENI RADNO VRIJEME RADNIKA</h1>
      <form
        onSubmit={e => handleSubmit(e)}
        className='ml-5 grid grid-cols-1 w-56'
      >
        <input
          type='text'
          value={data.employeeId}
          onChange={e =>
            setData({
              ...data,
              employeeId: Number(e.target.value)
            })
          }
          placeholder='ID radnika'
          required
          className='mt-4 pl-2 rounded-3xl bg-green-800 bg-opacity-30 text-white focus:outline-none focus:bg-yellow-400 focus:bg-opacity-20'
        />
        <input
          type='text'
          value={data.startHour}
          onChange={e =>
            setData({
              ...data,
              startHour: e.target.value
            })
          }
          placeholder='vrijeme početka'
          required
          className='mt-4 pl-2 rounded-3xl bg-green-800 bg-opacity-30 text-white focus:outline-none focus:bg-yellow-400 focus:bg-opacity-20'
        />
        <input
          type='text'
          value={data.endHour}
          onChange={e =>
            setData({
              ...data,
              endHour: e.target.value
            })
          }
          placeholder='vrijeme kraja'
          required
          className='mt-4 pl-2 rounded-3xl bg-green-800 bg-opacity-30 text-white focus:outline-none focus:bg-yellow-400 focus:bg-opacity-20'
        />
        <button
          type='submit'
          className='w-full mt-4 text-white bg-green-700 bg-opacity-40 rounded-3xl hover:bg-yellow-400 hover:bg-opacity-40 hover:border hover:border-solid hover:border-yellow-400'
        >
          DODAJ
        </button>
      </form>
      <div className='mt-5 ml-5 w-48 flex flex-col justify-center items-center font-bold text-center text-white'>
        STATUS:
        {addStatus === 'ERROR' ? (
          <span className='text-red-400'>{addStatus}</span>
        ) : (
          <span className='text-green-400'>{addStatus}</span>
        )}
      </div>
    </div>
  )
}
