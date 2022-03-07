import React from 'react'
import Recaptcha from 'react-google-recaptcha'

export default function EndReservation () {
  return (
    <div className='mb-auto h-screen flex justify-center items-center '>
      <div className='rounded-3xl bg-trans-green bg-opacity-80 h-4/5 w-2/4 text-white flex flex-col justify-center items-center '>
        <h1 className='text-3xl text-center'>POTVRDA REZERVACIJE</h1>
        <form className='flex flex-col text-left w-3/4 mt-5'>
          <div className='flex flex-col pb-2' id='name'>
            <label className='pl-2'>Ime i prezime</label>
            <input
              type='text'
              required
              className='rounded-3xl bg-trans-l-green bg-opacity-20 pl-4'
            />
          </div>
          <div className='flex flex-col pb-2'>
            <label className='pl-2'>Email</label>
            <input
              type='email'
              required
              className='rounded-3xl bg-trans-l-green bg-opacity-20 pl-4'
            />
          </div>
          <div className='flex flex-col pb-2'>
            <label className='pl-2'>Broj telefona</label>
            <input
              type='string'
              required
              className='rounded-3xl bg-trans-l-green bg-opacity-20 pl-4'
            />
          </div>
          <div className='flex flex-col pb-2'>
            <label className='pl-2'>Napomena (opcionalno) </label>
            <input
              type='text'
              className='rounded-3xl bg-trans-l-green bg-opacity-20 pl-4'
            />
          </div>
          <div className='text-left ml-2'>
            <input type='checkbox' required />
            <label className='ml-2 text-sm'>
              U svrhu izvršenja rezervacije prihvaćam obradu mojih osobnih
              podataka u skladu s Pravilima privatnosti.
            </label>
          </div>
          <div className='text-left ml-2'>
            <input type='checkbox' required />
            <label className='ml-2 text-sm'>
              Zakazani termin plaćam u punom iznosu ukoliko isti nisam otkazao
              minimalno 2 sata prije dogovorenog vremena
            </label>
          </div>
          <div className='flex flex-col justify-center items-center mt-2 '>
            <Recaptcha
              sitekey='6LeWs64eAAAAAGAcoSlN6l_x_ETlvBCkyiw1BAJT'
              theme='dark'
              className='scale-0.7'
            />
            <button
              type='submit'
              className='bg-trans-l-green bg-opacity-50 rounded-3xl w-3/4 mt-4'
            >
              POTVRDI REZERVACIJU
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
