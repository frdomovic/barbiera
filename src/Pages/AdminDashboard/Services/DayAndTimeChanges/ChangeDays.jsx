import React, { useState } from 'react'
import ChangeWorkerTime from './ChangeWorkerTime'
import FreeWorkerDays from './FreeWorkerDays'
import FreeBarbieraDays from './FreeBarbieraDays'

export default function ChangeDays () {
  const [showMenu, setShowMenu] = useState(false)
  const [pageId, setPageId] = useState(0)
  return (
    <div className='h-full flex'>
      <div className='w-32'>
        <button
          className='w-20 h-10 mt-5 ml-5 rounded-3xl bg-yellow-500 bg-opacity-20 hover:bg-transparent hover:font-bold hover:border hover:border-yellow-500 text-white'
          onClick={() => setShowMenu(!showMenu)}
        >
          AKCIJE
        </button>
        {showMenu && (
          <div className='ml-5 w-72 pl-2 pt-2 flex flex-col rounded-3xl bg-yellow-500 bg-opacity-80 absolute z-10'>
            {[
              'Dodaj slobodne dane radniku',
              'Dodaj neradne dane salona',
              'Promjeni radno vrijeme radnika'
            ].map((element, index) => {
              return (
                <span
                  key={index}
                  className='mb-1 pl-2 bg-yellow-800 bg-opacity-40 rounded-3xl hover:bg-green-400 hover:bg-opacity-30 cursor-pointer'
                  onClick={() => setPageId(index)}
                >
                  {element}
                </span>
              )
            })}
          </div>
        )}
      </div>

      <div className='h-9/10 w-full mt-3 ml-2 mr-2'>
        {
          {
            0: <ChangeWorkerTime />,
            1: <FreeBarbieraDays />,
            2: <FreeWorkerDays />
          }[pageId]
        }
      </div>
    </div>
  )
}
