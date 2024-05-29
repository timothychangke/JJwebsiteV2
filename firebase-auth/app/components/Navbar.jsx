import React from 'react'
import Link from 'next/link'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const {user} = UserAuth()

  return (
    <div className='h-20 w-full border-b-2 flex items-center justify-between p-2'>
      <ul className='flex'>
        <li className= 'p-2 cursor pointer'> 
          <Link href='/'> Home </Link>
        </li>

        <li className= 'p-2 cursor pointer'> 
          <Link href='/about'> About </Link>
        </li>
        
        <li className= 'p-2 cursor pointer'> 
          <Link href='/profile'> Profile </Link>
        </li>
      </ul>
      <ul className="flex">
        <li className ='p-2 cursor-pointer'>
          Login
        </li> 

        <li className ='p-2 cursor-pointer'>
          Login
        </li> 
      </ul>
    </div>
  )
}

export default Navbar
