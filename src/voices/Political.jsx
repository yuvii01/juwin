import React from 'react'
import { useNavigate } from 'react-router-dom';

const Political = () => {
    const navigate = useNavigate() ;
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center">
    <h1 className="text-5xl font-bold text-gray-800 mb-10">Top Voices</h1>
    <p onClick={() => {
        navigate('/p')
    }}  className=" text-xl text-gray-600">Abhijeet Chawda</p>

<p onClick={() => {
        navigate('/pdhruv')
    }}  className=" text-xl text-gray-600">Dhruv Rathee</p>

  </div>
  )
}

export default Political ;