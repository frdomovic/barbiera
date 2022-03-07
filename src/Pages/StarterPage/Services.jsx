import React from 'react'
import Servicecard from '../../Helpers/Servicecard'
export default function Services () {
  return (
    <div className='rounded-3xl bg-trans-green bg-opacity-80 h-max w-2/4 pt-10 pb-10 mr-10 ml-10'>
      <span className='text-white'>Odaberi uslugu</span>
      <div className='border border-solid border-white mb-10 rounded-full'></div>
      <ul>
        {[
          'Šišanje(30min)',
          'Šišanje-duga kosa',
          "Oliver's frizura",
          "OLiver's brada"
        ].map((el, index) => (
          <li key={index} className='list-none'>
            <Servicecard name={el} />
          </li>
        ))}
      </ul>
    </div>
  )
}
