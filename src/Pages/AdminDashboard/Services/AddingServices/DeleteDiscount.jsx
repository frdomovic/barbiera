import React, { useState, useEffect } from 'react'
import { getToken } from '../../../../Auth/SessionFunctions'

export default function DeleteDiscount () {
  const [addStatus, setStatus] = useState('')
  const [data, setData] = useState('')
  const [discounts, setDiscounts] = useState([])
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

    await fetch('/admin-page/delete-discount', requestOptions)
      .then(result => {
        if (result.status === 200) {
          setStatus('USPJEŠNO')
          setData('')
        } else {
          setStatus('ERROR')
        }
      })
      .catch(error => console.log('API  ERROR: ', error))
    loadDiscounts()
  }
  const loadDiscounts = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
    await fetch('/admin-page/get-discounts', requestOptions)
      .then(result => {
        return result.text()
      })
      .then(result => {
        setDiscounts(JSON.parse(result))
      })
      .catch(error => console.log('API  ERROR: ', error))
  }
  useEffect(() => {
    loadDiscounts()
  }, [])
  return (
    <div className='h-full mt-5 ml-2 mr-2 scroll-smooth scrollbar-hide overflow-y-scroll text-black'>
      <div className='mt-5 ml-5 text-white font-bold'>OBRIŠI POPUST</div>
      <div className='flex'>
        <form
          onSubmit={e => handleSubmit(e)}
          className='mt-1 ml-5 grid grid-cols-1 w-48'
        >
          <input
            type='text'
            value={data}
            onChange={e => setData(e.target.value)}
            placeholder='kod popusta'
            required
            className='mt-4 pl-2 rounded-3xl bg-green-800 bg-opacity-30 text-white focus:outline-none focus:bg-yellow-400 focus:bg-opacity-20'
          />

          <div className='flex'>
            <button
              onClick={() => setData('')}
              className='mt-4 w-10 text-white bg-green-700 bg-opacity-40 rounded-3xl hover:bg-yellow-400 hover:bg-opacity-40 hover:border hover:border-solid hover:border-yellow-400'
            >
              X
            </button>
            <button
              type='submit'
              className='w-full mt-4 text-white bg-green-700 bg-opacity-40 rounded-3xl hover:bg-yellow-400 hover:bg-opacity-40 hover:border hover:border-solid hover:border-yellow-400'
            >
              OBRIŠI
            </button>
          </div>

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
          <span className='font-bold text-white'>POSTOJEĆI POPUSTI</span>
          <div className='pl-5 grid grid-cols-5 text-left bg-yellow-800 bg-opacity-20 rounded-3xl text-white font-bold'>
            <span>id</span>
            <span>kod</span>
            <span>popust (%)</span>
            <span>za usluge</span>
            <span>za podusluge</span>
          </div>
          <ul className='h-2/3 mt-2 pt-2 bg-yellow-400 bg-opacity-20 rounded-3xl overflow-y-scroll scrollbar-hide text-white text-left'>
            {discounts.map((element, index) => {
              return (
                <li key={index} className='grid grid-cols-5 pl-5 h-5'>
                  <span>{element.discountid}</span>
                  <span>{element.code}</span>
                  <span>{element.percentage}</span>
                  {console.log(element.aplTo)}
                  <div className='flex'>
                    {element.aplTo.map((service, index) => (
                      <span key={index} className='ml-2'>
                        {service.idusluga}
                      </span>
                    ))}
                  </div>
                  <div className='flex'>
                    {element.aplToSub.map((service, index) => (
                      <span key={index} className='ml-2'>
                        {service.idusluga}
                      </span>
                    ))}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
