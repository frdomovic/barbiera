import React from 'react'
import logo_white from '../../Assets/Images/logo_white.png'
export default function Login () {
  return (
    <div className='mb-auto h-screen flex justify-center items-center'>
      <div className='rounded-3xl bg-trans-green bg-opacity-80 h-80 w-80 -mt-48'>
        <div className='text-center mt-2 flex flex-col justify-center items-center'>
          <span className='text-white text-xl text-center'>
            PRIJAVA ZA DJELATNIKE
          </span>
          <img src={logo_white} alt='whitelogo' className='w-1/5' />
        </div>
        <div>
          <form className='flex flex-col justify-center items-center mt-10'>
            <input
              type='email'
              required
              placeholder='email'
              className='bg-trans-l-green rounded-3xl pl-4 bg-opacity-20'
            />
            <input
              type='password'
              required
              placeholder='password'
              className='bg-trans-l-green rounded-3xl pl-4 mt-6 bg-opacity-20'
            />
            <div className='flex justify-center items-center w-full'>
              <button
                type='submit'
                className='mt-10 w-auto pl-14 pr-14 bg-orange-ps rounded-3xl mb-10'
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
