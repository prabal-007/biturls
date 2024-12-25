import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className='bg-red-500 flex text-black font-semibold text-sm justify-between items-center px-8 py-2'>
        <Link href="/">
        <div className='font-mono font-bold text-xl cursor-pointer'>BitURLs</div>
        </Link>
        <ul className='flex gap-4 items-center '>
            <Link href='/'><li>Home</li></Link>
            <Link href='/about'><li>About</li></Link>
            <Link href='/generate'><li>Shortner</li></Link>
            <Link href='/contact'><li>Contact Us</li></Link>
            <li className='flex px-2 justify-between items-center gap-2'>
            <Link href='/generate'><button className='bg-red-300 px-3 py-1 rounded-lg hover:bg-red-200 '>Try Now</button></Link>
            <Link href='/github'><button className='bg-red-300 px-3 py-1 rounded-lg hover:bg-red-200 '>GitHub</button></Link>
            </li>
        </ul>
    </nav>
  )
}
