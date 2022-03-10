import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import Pricings from './Pricings'
import Services from './Services'
const DATA = [
  {
    id: 1235,
    name: 'šišanje',
    time: '30minuta',
    desc: 'klasicno sisanje',
    price: '90',
    services: [
      {
        service_id: 9999,
        service_name: 'Masaža vlasišta i lica',
        desc: 'pranje kose',
        service_time: '15minuta',
        service_price: '50'
      },
      {
        service_id: 9998,
        service_name: 'Uređivanje brade na jednu dužinu',
        desc: '',
        service_time: '15minuta',
        service_price: '60'
      }
    ]
  },
  {
    id: 12335,
    name: 'šišanje2',
    time: '30minuta',
    desc: '',
    price: '120',
    services: [
      {
        service_id: 99299,
        service_name: 'Masaža vlasišta i lica',
        desc: 'pranje kose',
        service_time: '15minuta',
        service_price: '50'
      },
      {
        service_id: 99298,
        service_name: 'Uređivanje brade na jednu dužinu',
        desc: '',
        service_time: '15minuta',
        service_price: '60'
      }
    ]
  }
]
export default function StarterPage () {
  const [showAdditionalInfoID, setShowAdditionalInfoID] = useState(0)
  let navigate = useNavigate()
  const tellme = () => {
    console.log('ID: ', showAdditionalInfoID)
  }
  return (
    <div className='flex justify-center items-center text-white'>
      <div className='h-screen/1 w-2/4 mr-10 rounded-3xl bg-black bg-opacity-60'>
        <div className='h-12 p-10 mt-4 flex flex-col justify-center items-center'>
          <h1 className='font-bold text-3xl'>Odaberi uslugu</h1>
          <div className='mt-1 w-1/3 rounded-3xl border border-bg-green-700 border-solid'></div>
        </div>
        <Form>
          <Form.Group className='ml-5 list-none text-white text-2xl '>
            {DATA.map((element, index) => {
              return (
                <div key={index} className='mb-6'>
                  <div className='pb-2 grid grid-cols-7'>
                    <div className='flex flex-cols col-span-4'>
                      <Form.Check
                        type='checkbox'
                        value={element.id}
                        className='ml-2 mt-5 scale-150 '
                        onChange={e => {
                          tellme()
                          setShowAdditionalInfoID(e.target.value)
                        }}
                        id={element.id}
                      />
                      <h1 className='mt-6 ml-3'>
                        {element.name} ({element.time})
                        {element.desc && <span> - {element.desc}</span>}
                      </h1>
                    </div>
                    <div className='col-span-2'></div>
                    <div className='pr-7 mt-5 text-right text-3xl font-bold text-orange-600'>
                      {element.price}kn
                    </div>
                  </div>
                  <div>
                    {console.log(showAdditionalInfoID === element.id)}
                    {/*
                    <div className='text-gray-300 ml-10'>
                      {element.services.map((subel, index) => {
                        return (
                          <div key={index} className='flex text-md'>
                            <Form.Check type='radio' />
                            <span className='ml-2'>
                              {subel.service_name} ({subel.service_time})
                            </span>
                          </div>
                        )
                      })}
                    </div>
                    */}
                  </div>
                  <div className='mt-1 mr-3 w-fill rounded-3xl border border-bg-green-700 border-solid'></div>
                </div>
              )
            })}
          </Form.Group>
        </Form>
      </div>
      <div className='h-screen/3 bg-black bg-opacity-60 rounded-3xl'>
        <div className='flex flex-col items-center'>
          <h1 className='mt-2 font-bold text-center text-3xl'>
            Odabrane usluge
          </h1>
          <div className='mt-1 w-4/5 rounded-3xl border border-bg-green-700 border-solid'></div>
        </div>
        <div className='mt-2 ml-10'>
          <span>
            -sisanje 90kn
            <br />
            -masaza lica i vlasista 50kn <br />
          </span>
        </div>

        <div className='w-4/5 mt-1 ml-10  rounded-3xl border border-bg-green-700 border-solid'></div>
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
            <span className='text-yellow-500 text-bold text-2xl'>140kn</span>
          </span>
          <span>
            TRAJANJE: <span className='text-yellow-500'>45min</span>
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
