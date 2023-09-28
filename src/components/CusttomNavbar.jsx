
"use client";

import Link from 'next/link';
import React from 'react'



const CusttomNavbar = () => {
    console.log("tetting");
  return (
    <nav className=' bg-blue-600 h-12 py-2 px-3 flex justify-between items-center text-white'>
        <div className="brand">
            <h1 className=' text-2xl font-semibold text-yellow-300'><Link href="/">Work Manager</Link></h1>
        </div>
        <div>
            <ul className=' flex gap-5 items-center'>
                <li className='w-[fit-content] hover:bg-white px-5 py-1 rounded hover:text-red-500'>
                    <Link href="/" >Home</Link>
                </li>
                <li className='w-[fit-content] hover:bg-white px-5 py-1 rounded hover:text-red-500'>
                    <Link href="/add-task">Add Task</Link>
                </li>
                <li className='w-[fit-content] hover:bg-white px-5 py-1 rounded hover:text-red-500'>
                    <Link href="/show-tasks">Show Task</Link>
                </li>
            </ul>
        </div>
        <div>
            <ul className=' flex'>
                <li className='w-[fit-content] hover:bg-white px-5 py-1 rounded hover:text-red-500'>
                    <Link href={'/login'}>Login</Link>
                </li>
                <li className='w-[fit-content] hover:bg-white px-5 py-1 rounded hover:text-red-500'>
                    <Link href={'/signup'}>SignUp</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default CusttomNavbar