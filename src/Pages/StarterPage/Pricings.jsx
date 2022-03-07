import React from 'react'

export default function Pricings () {
  return (
    <div
      className='rounded-3xl bg-trans-green bg-opacity-80 
                      h-2/4 w-2/4 pt-10 pb-10 pl-5  pr-5 mr-10 ml-10 flex flex-col text-white'
    >
      <span>Odabrane usluge</span>
      <div className='border border-solid border-white mb-10 rounded-full'></div>
      <span>
        usluga1 <span className='float-right text-trans-l-green'> 90kn</span>
      </span>
      <span>
        usluga2 <span className='float-right text-trans-l-green'> 50kn</span>
      </span>
      <div className='border border-solid border-white mt-5 rounded-full'></div>
      <span>PROMO KOD</span>
      <div className='flex'>
        <input
          type='text'
          className='bg-trans-l-green bg-opacity-50 rounded-3xl pl-4 text-white w-2/3 mr-1'
        ></input>
        <button type='submit' className='bg-[#9C9469] rounded-3xl w-1/3'>
          POTVRDI
        </button>
      </div>
      <div className='border border-solid border-white mt-5 mb-5 rounded-full'></div>
      <span>
        CIJENA: <span className='text-trans-l-green'>140kn</span>
      </span>
      <span>
        trajanje: <span className='text-trans-l-green'>45min</span>
      </span>
      <div className='w-full flex justify-center '>
        <button className='text-white w-4/5 bg-white bg-opacity-20 rounded-3xl mt-5'>
          ODABIR TERMINA
        </button>
      </div>
    </div>
  )
}
