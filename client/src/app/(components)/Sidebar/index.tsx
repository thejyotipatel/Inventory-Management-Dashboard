'use client'
import React from 'react'
import { Menu } from 'lucide-react'

const Sidebar = () => {
  return (
    <div>
      {/* TOP LOGO */}
      <div className='flex gap-3 justify-between md:justify-normal items-center pt-8'>
        <div className=''>LOGO</div>
        <h1 className='font-extrabold text-2xl'>ITMGDB</h1>

        <button className='md:hidden py-2 px-3 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors duration-200'>
          <Menu className='w-4 h-4' />
        </button>
      </div>

      {/* LINKS */}
      <div className='flex-grow mt-8'>{/* links */}</div>
      {/* links */}

      <div className='flex flex-col gap-2'>
        <a
          href='#'
          className='text-gray-700 hover:text-blue-600 transition-colors duration-200'
        >
          Home
        </a>
        <a
          href='#'
          className='text-gray-700 hover:text-blue-600 transition-colors duration-200'
        >
          About
        </a>
        <a
          href='#'
          className='text-gray-700 hover:text-blue-600 transition-colors duration-200'
        >
          Services
        </a>
        <a
          href='#'
          className='text-gray-700 hover:text-blue-600 transition-colors duration-200'
        >
          Contact
        </a>

        {/* FOOTER */}
        <div className=''></div>
      </div>

      <div className='text-center text-xs  text-gray-500  '>
        <p>© 2023 ITMGDB. All rights reserved.</p>
      </div>
    </div>
  )
}
export default Sidebar
