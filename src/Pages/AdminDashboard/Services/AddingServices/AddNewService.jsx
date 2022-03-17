import React, { useState, useEffect } from 'react'
import { getToken } from '../../../../Auth/SessionFunctions'

export default function AddNewService () {
  const [addStatus, setStatus] = useState('')
  const [data, setData] = useState({
    imgsrc: '/url/slike',
    name: '',
    description: '',
    currency: '',
    price: undefined,
    duration: undefined
  })
  const [services, setServices] = useState([])
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

    await fetch('/admin-page/add-service', requestOptions)
      .then(result => {
        if (result.status === 200) {
          setStatus('USPJEŠNO')
        } else {
          setStatus('ERROR')
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
    <div className='h-full mt-5 ml-2 mr-2 scroll-smooth scrollbar-hide overflow-y-scroll text-black'>
      <div className='mt-5 ml-5 text-white font-bold'>DODAJ NOVU USLUGU</div>
      <div className='flex'>
        <form
          onSubmit={e => handleSubmit(e)}
          className='mt-1 ml-5 grid grid-cols-1 w-48'
        >
          <input
            type='text'
            value={data.name}
            onChange={e =>
              setData({
                ...data,
                name: e.target.value
              })
            }
            placeholder='ime usluge'
            required
            className='mt-4 pl-2 rounded-3xl bg-green-800 bg-opacity-30 text-white focus:outline-none focus:bg-yellow-400 focus:bg-opacity-20'
          />
          <input
            type='text'
            value={data.description}
            onChange={e =>
              setData({
                ...data,
                description: e.target.value
              })
            }
            placeholder='opis usluge'
            required
            className='mt-4 pl-2 rounded-3xl bg-green-800 bg-opacity-30 text-white focus:outline-none focus:bg-yellow-400 focus:bg-opacity-20'
          />
          <input
            type='text'
            value={data.currency}
            onChange={e =>
              setData({
                ...data,
                currency: e.target.value
              })
            }
            placeholder='valuta (kn/eur)'
            required
            className='mt-4 pl-2 rounded-3xl bg-green-800 bg-opacity-30 text-white focus:outline-none focus:bg-yellow-400 focus:bg-opacity-20'
          />
          <input
            type='text'
            value={data.price}
            onChange={e =>
              setData({
                ...data,
                price: e.target.value
              })
            }
            placeholder='cijena'
            required
            className='mt-4 pl-2 rounded-3xl bg-green-800 bg-opacity-30 text-white focus:outline-none focus:bg-yellow-400 focus:bg-opacity-20'
          />
          <input
            type='text'
            value={data.duration}
            onChange={e =>
              setData({
                ...data,
                duration: e.target.value
              })
            }
            placeholder='trajanje usluge u min'
            required
            className='mt-4 pl-2 rounded-3xl bg-green-800 bg-opacity-30 text-white focus:outline-none focus:bg-yellow-400 focus:bg-opacity-20'
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
    </div>
  )
}
