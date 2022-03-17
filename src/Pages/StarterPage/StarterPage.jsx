import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Pricings from './Pricings'
import Services from './Services'

export default function StarterPage () {
  const [subs, setSubs] = useState(100)
  const [data, setData] = useState([])
  const [price, setPrice] = useState('')
  const [duration, setDuration] = useState('')
  const [selectedService, setSS] = useState({
    name: '',
    price: '',
    currency: '',
    duration: ''
  })
  const [selectedSub, setSSS] = useState([])

  let navigate = useNavigate()
  const getServices = async () => {
    await fetch('/schedule/get-services')
      .then(result => result.text())
      .then(result => setData(JSON.parse(result)))
      .catch(error => console.log('error:', error))
  }
  useEffect(() => {
    getServices()
  }, [])

  return (
    <div className='flex justify-center items-center text-white'>
      <div className='h-screen/1 w-2/4 mr-10 rounded-3xl bg-black bg-opacity-60'>
        <div className='h-12 p-10 flex flex-col justify-center items-center'>
          <h1 className='font-bold text-2xl'>Odaberi uslugu</h1>
          <div className='mt-1 w-1/3 rounded-3xl border border-bg-green-700 border-solid'></div>
        </div>
        <div className='h-4/5 ml-4 mr-4 '>
          {data.map((element, index) => {
            return (
              <div key={index}>
                <div
                  className='ml-3 mr-3 pl-3 pr-3 text-white bg-yellow-500 bg-opacity-50 mb-2 rounded-3xl hover:bg-green-500 hover:bg-opacity-30 cursor-pointer'
                  onClick={() => {
                    setSSS([])
                    if (subs === index) {
                      setSubs(999)
                      setSS({
                        name: '',
                        price: '',
                        currency: ''
                      })
                      setPrice('')
                      setDuration('')
                    } else {
                      setSubs(index)
                      setSS({
                        ...selectedService,
                        name: element.name,
                        price: element.price,
                        duration: element.duration,
                        currency: element.currency
                      })
                      setPrice(element.price)
                      setDuration(element.duration)
                    }
                  }}
                >
                  <span className='font-bold'>{element.name} </span>
                  <span className='text-sm'>
                    ({element.duration}min) - {element.description}
                  </span>
                  <span className='float-right font-bold text-yellow-400'>
                    {element.price}
                    {element.currency}
                  </span>
                </div>
                {index === subs && (
                  <div>
                    {element.subservices.map((subs, index) => {
                      return (
                        <div
                          key={index}
                          className='w-3/5 mb-1 ml-20 pl-2 pr-2 bg-yellow-800 bg-opacity-30 rounded-3xl hover:bg-red-400 hover:bg-opacity-30 cursor-pointer'
                          onClick={() => {
                            if (!selectedSub.includes(subs)) {
                              setSSS(arr => [...arr, subs])
                              setPrice(price + subs.price)
                              setDuration(duration + subs.duration)
                            } else {
                              let a = selectedSub.filter(el => el !== subs)
                              setSSS(a)
                              setPrice(price - subs.price)
                              setDuration(duration - subs.duration)
                            }
                          }}
                        >
                          <span>{subs.name} </span>
                          <span className='text-sm'>
                            ({subs.duration}min) - {subs.description}
                          </span>
                          <span className='float-right font-bold text-yellow-400'>
                            {subs.price}
                            {subs.currency}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
      <div className='h-screen/3 bg-black bg-opacity-60 rounded-3xl'>
        <div className='flex flex-col items-center'>
          <h1 className='mt-2 font-bold text-center text-3xl'>
            Odabrane usluge
          </h1>
          <div className='mt-1 w-4/5 rounded-3xl border border-bg-green-700 border-solid'></div>
        </div>
        <div className='h-16 mt-2 ml-10'>
          <span>{selectedService.name}</span>
          <span className='mr-10 float-right text-yellow-400'>
            {selectedService.price}
            {selectedService.currency}
          </span>
          <div>
            {selectedSub &&
              selectedSub.map((el, i) => {
                return (
                  <div key={i}>
                    <span>{el.name}</span>
                    <span className='mr-10 float-right text-yellow-400'>
                      {el.price}
                      {el.currency}
                    </span>
                  </div>
                )
              })}
          </div>
        </div>

        <div className='w-4/5 mt-2 ml-10  rounded-3xl border border-bg-green-700 border-solid'></div>
        <div className='mt-4 flex flex-col items-center'>
          <div className='ml-10'>
            <span className='ml-1'>PROMO KOD</span>
            <input
              type='text'
              className='w-2/4 ml-2 pl-2 bg-[#315430] bg-opacity-60 text-yellow-400 rounded-3xl'
            ></input>
          </div>
          <button
            type='button'
            className='mt-2 w-2/4 bg-yellow-500 rounded-3xl bg-opacity-60'
          >
            POTVRDI
          </button>
        </div>

        <div className='w-4/5 mt-1 ml-10  rounded-3xl border border-bg-green-700 border-solid'></div>
        <div className='mt-3 flex flex-col items-center'>
          <span>
            CIJENA:{' '}
            <span className='text-yellow-500 text-bold text-2xl'>
              {price}
              {selectedService.currency}
            </span>
          </span>
          <span>
            TRAJANJE:{' '}
            {duration && <span className='text-yellow-500'>{duration}min</span>}
          </span>
          <button
            type='button'
            className='mt-2 w-3/4 bg-yellow-500 rounded-3xl bg-opacity-60'
            onClick={() => navigate('/date-reservation/')}
          >
            ODABIR TERMINA
          </button>
        </div>
      </div>
    </div>
  )
}

/**
 * resi to preko ID-a
 */
