import React, { useState, useEffect } from 'react'
import { getToken } from '../../../../Auth/SessionFunctions'

export default function DeleteServices () {
  const [data, setData] = useState('')
  const [addStatus, setAddStatus] = useState('')
  const [services, setServices] = useState([])
  const handleSubmit = async e => {
    e.preventDefault()

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`
      },
      body: JSON.stringify(Number(data))
    }
    await fetch('/admin-page/delete-service', requestOptions)
      .then(result => {
        if (result.status === 200) {
          setAddStatus('USPJEŠNO')
        } else {
          setAddStatus('ERROR')
        }
      })
      .catch(error => console.log('API  ERROR: ', error))
    loadServices()
  }
  const loadServices = async () => {
    await fetch('/schedule/get-services')
      .then(result => result.text())
      .then(result => setServices(JSON.parse(result)))
      .catch(error => console.log('API  ERROR: ', error))
  }
  useEffect(() => {
    loadServices()
  }, [])
  return (
    <div className='h-full w-full flex'>
      <div>
        <h1 className='ml-5 pt-5 text-white font-bold'>OBRIŠI USLUGU</h1>
        <form
          onSubmit={e => handleSubmit(e)}
          className='ml-5 grid grid-cols-1 w-72'
        >
          <input
            type='text'
            value={data}
            onChange={e => setData(e.target.value)}
            placeholder='id usluge'
            required
            className='mt-4 pl-2 rounded-3xl bg-green-800 bg-opacity-30 text-white focus:outline-none focus:bg-yellow-400 focus:bg-opacity-20'
          />

          <button
            type='submit'
            className='w-full mt-4 text-white bg-green-700 bg-opacity-40 rounded-3xl hover:bg-yellow-400 hover:bg-opacity-40 hover:border hover:border-solid hover:border-yellow-400'
          >
            OBRIŠI
          </button>
          <div className='mt-5 ml-5 w-48 flex flex-col justify-center items-center font-bold text-center text-white'>
            STATUS:
            {addStatus === 'ERROR' ? (
              <span className='text-red-400'>{addStatus}</span>
            ) : (
              <span className='text-green-400'>{addStatus}</span>
            )}
          </div>
        </form>
      </div>

      <div className='w-4/5 ml-10 text-center'>
        <span className='font-bold text-white'>POSTOJEĆE USLUGE</span>
        <div className='pl-5 grid grid-cols-4 text-left bg-yellow-800 bg-opacity-20 rounded-3xl text-white font-bold'>
          <span>id</span>
          <span>Ime</span>
          <span>Opis</span>
          <span>Cijena</span>
        </div>
        <ul className='h-2/3 mt-2 pt-2 bg-yellow-400 bg-opacity-20 rounded-3xl overflow-y-scroll scrollbar-hide text-white text-left'>
          {services.map((element, index) => {
            return (
              <li key={index} className='grid grid-cols-4 pl-5 h-5'>
                <span>{element.idusluga}</span>
                <span>{element.name}</span>

                {element.description.length > 30 ? (
                  <span className='overflow-x-scroll w-full scrollbar-hide text-green-800'>
                    {element.description}
                  </span>
                ) : (
                  <span className='w-full scrollbar-hide'>
                    {element.description}
                  </span>
                )}

                <span>
                  {element.price}
                  {''}
                  {element.currency}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
