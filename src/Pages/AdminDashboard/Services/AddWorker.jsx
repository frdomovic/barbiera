import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import { getToken } from '../../../Auth/SessionFunctions'
export default function AddWorker () {
  const [Data, setData] = useState({
    name: '',
    imgUrl: '',
    username: '',
    password: '',
    startHour: '',
    endHour: '',
    usluge: []
  })
  const [addStatus, setAddStatus] = useState('')
  const [workers, setWorkers] = useState([])

  const handleSubmit = async e => {
    e.preventDefault()
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`
      },
      body: JSON.stringify({
        name: Data.name,
        imgUrl: '/slike/img',
        username: Data.username,
        password: Data.password,
        startHour: Data.startHour,
        endHour: Data.endHour,
        usluge: Data.usluge
      })
    }

    await fetch('/admin-page/new-employee', requestOptions)
      .then(result => {
        if (result.status === 200) {
          setAddStatus('USPJEŠNO')
          getWorkers()
        } else {
          setAddStatus('ERROR')
        }
      })
      .catch(error => console.log('API  ERROR: ', error))
  }
  const getWorkers = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
    await fetch('/admin-page/get-all-employees', requestOptions)
      .then(result => result.text())
      .then(result => setWorkers(JSON.parse(result)))
      .catch(error => console.log('API  ERROR: ', error))
  }
  useEffect(() => {
    getWorkers()
  }, [])
  return (
    <div className='h-full mt-5 ml-2 mr-2 scroll-smooth scrollbar-hide overflow-y-scroll text-black'>
      <div className='ml-5 mt-5 text-white font-bold'>
        DODAJ NOVOG DJELATNIKA
      </div>
      <div className='ml-5 flex'>
        <form onSubmit={e => handleSubmit(e)} className='grid grid-cols-1 w-48'>
          <input
            type='text'
            value={Data.name}
            onChange={e =>
              setData({
                ...Data,
                name: e.target.value
              })
            }
            placeholder='name'
            required
            className='mt-4 pl-2 rounded-3xl bg-green-800 bg-opacity-30 text-white focus:outline-none focus:bg-yellow-400 focus:bg-opacity-20'
          />
          <input
            type='text'
            value={Data.username}
            onChange={e =>
              setData({
                ...Data,
                username: e.target.value
              })
            }
            placeholder='username'
            required
            className='mt-4 pl-2 rounded-3xl bg-green-800 bg-opacity-30 text-white focus:outline-none focus:bg-yellow-400 focus:bg-opacity-20'
          />
          <input
            type='text'
            value={Data.password}
            onChange={e =>
              setData({
                ...Data,
                password: e.target.value
              })
            }
            className='mt-4 pl-2 rounded-3xl bg-green-800 bg-opacity-30 text-white focus:outline-none focus:bg-yellow-400 focus:bg-opacity-20'
            placeholder='password'
            required
          />
          <input
            type='text'
            value={Data.startHour}
            onChange={e =>
              setData({
                ...Data,
                startHour: e.target.value
              })
            }
            className='mt-4 pl-2 rounded-3xl bg-green-800 bg-opacity-30 text-white focus:outline-none focus:bg-yellow-400 focus:bg-opacity-20'
            placeholder='startHour'
            required
          />
          <input
            type='text'
            value={Data.endHour}
            onChange={e =>
              setData({
                ...Data,
                endHour: e.target.value
              })
            }
            className='mt-4 pl-2 rounded-3xl bg-green-800 bg-opacity-30 text-white focus:outline-none focus:bg-yellow-400 focus:bg-opacity-20'
            placeholder='endHour'
            required
          />
          <input
            type='text'
            value={Data.usluge}
            onChange={e =>
              setData({
                ...Data,
                usluge: e.target.value.split(',').map(Number)
              })
            }
            className='mt-4 pl-2 rounded-3xl bg-green-800 bg-opacity-30 text-white focus:outline-none focus:bg-yellow-400 focus:bg-opacity-20'
            placeholder='usluge'
            required
          />

          <button
            type='submit'
            className='w-full mt-4 text-white bg-green-700 bg-opacity-40 rounded-3xl hover:bg-yellow-400 hover:bg-opacity-40 hover:border hover:border-solid hover:border-yellow-400'
          >
            DODAJ
          </button>
          <div className='flex flex-col justify-center items-center mt-10 font-bold text-center text-white'>
            STATUS:
            {addStatus === 'ERROR' ? (
              <span className='text-red-400'>{addStatus}</span>
            ) : (
              <span className='text-green-400'>{addStatus}</span>
            )}
          </div>
        </form>

        <div className='w-4/5 ml-10 -mt-5 text-center'>
          <span className='font-bold text-white'>POSTOJEĆI RADNICI</span>
          <div className='pl-5 mt-2 grid grid-cols-4 text-left bg-yellow-800 bg-opacity-20 rounded-3xl text-white font-bold'>
            <span>ID</span>
            <span>Ime</span>
            <span>Username</span>
            <span>Radni sati</span>
          </div>
          <ul className='h-2/3 mt-2 pt-2 bg-yellow-400 bg-opacity-20 rounded-3xl overflow-y-scroll scrollbar-hide text-white text-left'>
            {workers.map((element, index) => {
              return (
                <li key={index} className='grid grid-cols-4 mb-2 pl-5'>
                  <span>{element.iddjelatnik}</span>
                  <span>{element.name}</span>
                  <span>{element.username}</span>

                  {element.workingHours.slice(0, 1).map((i, key) => (
                    <span key={key}>
                      {i.startHour}-{i.endHour}
                    </span>
                  ))}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

/**
 * 
 * useEffect(() => {
     const requestOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
      body: JSON.stringify({
        name: ,
        imgUrl: ,
        username: ,
        password: ,
        startHour: ,
        endHour: ,
        usluge: 
      })
    }
    const getData = async () => {
      await fetch('admin-page/new-employee', requestOptions)
        .then(result => {
          console.log(result)
        })
        .catch(error => console.log('API  ERROR: ', error))
    }
    getData()
  }, [])
 */
