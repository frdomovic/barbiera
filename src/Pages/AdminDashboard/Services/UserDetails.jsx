import React, { useEffect, useState } from 'react'
import { getToken } from '../../../Auth/SessionFunctions'
import axios from 'axios'

export default function UserDetails () {
  const [userData, setUserData] = useState([])
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
    const getData = async () => {
      await fetch('admin-page/get-all-clients', requestOptions)
        .then(result => {
          return result.json()
        })
        .then(data => setUserData(data))
        .catch(error => console.log('API  ERROR: ', error))
    }
    getData()
  }, [])
  return (
    <ul className='h-full mt-5 ml-2 mr-2 scroll-smooth scrollbar-hide overflow-y-scroll'>
      <div className='grid grid-cols-3 bg-yellow-800 rounded-lg bg-opacity-20 text-center text-xl font-bold'>
        <span>IME I PREZIME</span>
        <span>EMAIL </span>
        <span>BROJ TELEFONA</span>
      </div>
      <div className='border border-solid border-yellow-400 border-opacity-80 mb-2'></div>
      {userData.map((element, index) => {
        return (
          <li
            key={index}
            className='grid grid-cols-3 rounded-3xl bg-green-400 bg-opacity-20 mb-2 text-center'
          >
            <span>
              {element.name}
              <span className='ml-2'>{element.surname}</span>
            </span>
            <span>{element.email}</span>
            <span>{element.phonenumber}</span>
          </li>
        )
      })}
    </ul>
  )
}
