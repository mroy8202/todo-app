import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-16 bg-gray-600 flex items-center justify-between px-4'>
        <Link to='/' className='text-white font-bold text-4xl'>
            TODO
        </Link>
        
        <Link to="/addTask" className="text-white flex items-center font-semibold text-2xl">
            ADD TASK <span className="ml-1">+</span>
        </Link>
    </div>
  )
}

export default Navbar;
