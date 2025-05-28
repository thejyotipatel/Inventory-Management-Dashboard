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
      <div className='flex-grow'></div>
    </div>
  )
}
export default Sidebar
