import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Calendar from 'react-calendar'
//
import worker_fe from '../../Assets/Images/worker_fe.png'
import worker_ma from '../../Assets/Images/worker_ma.png'
import poleicon from '../../Assets/Images/poleicon.png'
import scissor_icon from '../../Assets/Images/scissor_icon.png'
import razor_icon from '../../Assets/Images/razor_icon.png'

const barbers = [
  {
    id: 1,
    name: 'Prvi Slobodan',
    image: poleicon,
    icon: scissor_icon
  },
  {
    id: 2,
    name: 'Stjepan',
    image: worker_ma,
    icon: razor_icon
  },
  {
    id: 3,
    name: 'Sara',
    image: worker_fe,
    icon: scissor_icon
  }
]
const freetime = [
  {
    id: 1,
    time: '08:00-08:30'
  },
  {
    id: 2,
    time: '08:30-09:00'
  },
  {
    id: 3,
    time: '09:00-09:30'
  },
  {
    id: 4,
    time: '09:30-10:30'
  },
  {
    id: 5,
    time: '15:00-15:30'
  },
  {
    id: 6,
    time: '15:30-16:30'
  },
  {
    id: 7,
    time: '12:00-12:30'
  },
  {
    id: 8,
    time: '12:30-13:00'
  }
]

/**
 *
 * trebam sad napravit ovak neki kao forloop koji racuna za 60 dana unaprijed i da ih ja mogu odabrat
 * od danasnjeg dana kao i to se tak rjesava bez kalendara
 * SUTRA SLOZIT AUTH I PRIVATE ROUTE , SLOZIT RECAPTCHA ZADNJI PAGE,
 * SLOZIT SLANJE PODATAKA PREKO STRANICA DOVRSIT ODABIR TERMINA
 * RADIT SAMO NA POBOLJSANJU DIZAJNA
 */
export default function DateReservation () {
  const [barberSelected, setBarberSelected] = useState(0)
  const [timeSelected, setTimeSelected] = useState('')
  const [dateSelected, setDateSelected] = useState(new Date())
  useEffect(() => {
    const today = new Date()
    const copy = new Date()
    console.log('TODAY IS: ', today.toLocaleDateString())
    today.setDate(today.getDate() + 60)
    console.log(
      'TIME IN 60 VS TIME NOW',
      today.getTime(),
      ' | x | ',
      copy.getTime()
    )
    const difference = today.getTime() - copy.getTime()
    const dif_days = difference / (1000 * 3600 * 24)
    console.log('THAT IS IN:', Math.round(dif_days))
  }, [])
  let navigate = useNavigate()
  return (
    <div className='w-full h-full flex flex-col justify-cetner items-center text-white'>
      <div className='h-screen/0 w-2/4 mt-10 bg-black bg-opacity-40 rounded-3xl'>
        <div className='h-full w-full ml-5 mt-5 flex flex-col'>
          <div className='font-bold text-3xl'>Odaberi svog frizera</div>
          <div className='mt-1 w-1/3 rounded-3xl border border-yellow-300 border-solid'></div>
          <div className='w-3/5 mt-2 mb-2 grid grid-cols-3'>
            {barbers.map((barber, index) => {
              return (
                <div
                  key={index}
                  className='flex flex-col items-center justify-center cursor-pointer rounded-3xl hover:bg-yellow-500 hover:bg-opacity-20'
                  onClick={() => setBarberSelected(index)}
                >
                  <img
                    src={barber.image}
                    alt='worker-img'
                    className='w-32 h-32 bg-green-400 rounded-full'
                  />
                  <div className='mt-1 ml-5 flex items-center justify-center'>
                    <span>{barber.name}</span>
                    <img
                      src={barber.icon}
                      alt='icon'
                      className='mt-1 ml-2 h-6 '
                    />
                  </div>
                </div>
              )
            })}
          </div>
          <div>
            <div className='mt-0'>Odabir datuma</div>
            <div className='mt-1 w-1/3 rounded-3xl border border-yellow-300 border-solid'></div>
          </div>

          <div>
            <div>slobodni termini</div>
            <div className='mt-1 w-1/3 rounded-3xl border border-yellow-300 border-solid'></div>
            <div className='w-4/5 mt-4 grid grid-cols-4 place-items-center'>
              {freetime.map((time, index) => {
                return (
                  <div
                    key={index}
                    className='w-32  mb-2  text-center rounded-3xl bg-yellow-400 bg-opacity-20 hover:bg-green-500 hover:bg-opacity-60 cursor-pointer'
                    onClick={() => setTimeSelected(time.time)}
                  >
                    {time.time}
                  </div>
                )
              })}
            </div>
          </div>

          <div>vaš izbor</div>
          <div className='mt-1 w-1/3 rounded-3xl border border-yellow-300 border-solid'></div>
          <div className='mt-2 mb-20'>
            <div className='flex'>
              Frizer:
              <h1 className='ml-2 text-yellow-500 font-bold'>
                {barbers[barberSelected].name}{' '}
              </h1>
            </div>
            <div className='flex'>
              {' '}
              Datum i vrijeme:{' '}
              <h1 className='ml-2 mr-2 text-yellow-500 font-bold'></h1> u
              terminu{' '}
              <h1 className='ml-2 text-yellow-500 font-bold'>{timeSelected}</h1>
            </div>
            <div className='flex'>
              vaša reverzavija za:{' '}
              <h1 className='ml-2 text-yellow-500 font-bold mr-2'>3</h1> dana
            </div>
          </div>
          <button
            type='button'
            className='w-1/3 rounded-3xl text-white bg-yellow-300 bg-opacity-50'
            onClick={() => navigate('/date-reservation/endreservation/')}
          >
            POTVRDI REZERVACIJU
          </button>
        </div>
      </div>
    </div>
  )
}

/**
 * <div className='h-48 w-48'>
              <div className='h-32 w-32 bg-green-400 rounded-full'>
                <img src={poleicon} alt='barber-pole-icn' />
              </div>
              <div className='ml-4 mt-2'>Prvi slobodan</div>
            </div>
            <div className='h-48 w-48'>
              <img
                src={worker_ma}
                alt='worker-img'
                className='w-32 h-32 rounded-full'
              />
              <div>Stjepan</div>
            </div>
            <div className='h-48 w-48'>
              <img
                src={worker_fe}
                alt='worker-img'
                className='w-32 h-32 rounded-full'
              />
              <div>Sara</div>
            </div>
 */
