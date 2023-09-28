import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className=' bg-orange-600 w-[100%] h-40 items-center flex'>
        <div className='flex px-10 items-center justify-between w-[100%] '>
            <div className=' flex flex-col gap-2'> 
                <h1 className='text-white font-semibold text-2xl'>Welcome to Work Manager</h1>
                <p className=' text-yellow-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className=' flex justify-center items-center flex-col gap-5'>
                <h1 className='text-white font-semibold text-2xl'>Important LInks</h1>
                <ul className=' text-green-300'>
                    <li>
                        <Link target={"_blank"} href={"https://www.facebook.com/"} >Facebook</Link>
                    </li>
                    <li>
                        <Link target={"_blank"} href={"https://www.instagram.com/"} >Instagram</Link>
                    </li>
                    <li>
                        <Link target={"_blank"} href={"https://www.linkdin.com/"} >Linkdin</Link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer