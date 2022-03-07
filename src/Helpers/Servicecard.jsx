import React, { useState } from 'react'

const Servicecard = props => {
  const [additions, setAdditions] = useState(false)
  const showOthers = () => {
    setAdditions(!additions)
  }
  return (
    <div>
      <div className='flex grid-col'>
        <input
          type='checkbox'
          className='mr-3 ml-2'
          onClick={() => showOthers()}
        ></input>
        <div className='text-white'>
          {props.name}
          <span className='float-right text-trans-l-green ml-2'>90kn</span>
        </div>
      </div>
      {additions && (
        <div className='flex justify-center'>
          <input type='checkbox' />

          <span className='ml-2 text-white'>Masaža vlasišta i lica</span>
        </div>
      )}
      <div className='border border-solid border-white mb-10 rounded-full'></div>
    </div>
  )
}

export default Servicecard

/***
 * 
      

    </div>
    {additions && (
      <div className='flex justify-center'>

        <input type='checkbox' />

        <span className='ml-2 text-white'>Masaža vlasišta i lica</span>

      </div>)}

 */
