import React from 'react'

const Header = () => {

  return (
    <div className="z-[100000] fixed top-0 left-0 w-full bg-gray-800 p-4 flex justify-between items-center shadow-md z-10">
      <div className="text-2xl font-bold text-white">Personify</div>
      <ul className="flex space-x-5">
        <li><a href="#home" className="text-white hover:bg-gray-600 rounded px-3 py-2 transition duration-300">Home</a></li>
        <li><a href="#about" className="text-white hover:bg-gray-600 rounded px-3 py-2 transition duration-300">About</a></li>
        <li><a href="#contact" className="text-white hover:bg-gray-600 rounded px-3 py-2 transition duration-300">Contact</a></li>
      </ul>
    </div>
  )
}

export default Header