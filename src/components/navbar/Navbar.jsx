import React, { useState } from 'react'
// import Icon from '../../asserts/doctor.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

export const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)
    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-300 drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>

                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Doctreat</h1>
                    <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>Main</li>
                        <li>Health Forum</li>
                        <li>How it works?</li>
                        <li>Pages</li>
                        <li>Join now</li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4 '>
                    <button className=' p-3 mr-1 text-black border border-transparent hover:border-indigo-600 rounded-md hover:text-indigo-600 '>Sign In</button>
                    <button className='bg-indigo-600 text-white px-8 py-3 border hover:bg-transparent hover:border-indigo-600 hover:text-indigo-600  rounded-md'>Sign Up</button>
                </div>
                <div className="md:hidden" onClick={handleClick}>
                    {!nav ? <GiHamburgerMenu className='w-5 ml-2' /> : <GrClose className='w-5' />}
                </div>

            </div>
            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-2'}>
                <li className='border-b-2 border-zinc-300 w-full'>Home</li>
                <li className='border-b-2 border-zinc-300 w-full'>Main</li>
                <li className='border-b-2 border-zinc-300 w-full'>Health Forum</li>
                <li className='border-b-2 border-zinc-300 w-full'>How it works?</li>
                <li className='border-b-2 border-zinc-300 w-full'>Pages</li>
                <li className='border-b-2 border-zinc-300 w-full'>Join now</li>
                <div className='flex flex-col w-full'>
                    <button className='px-8 py-3 mb-4 text-black border  border-transparent hover:border-indigo-600 rounded-md hover:text-indigo-600 '>Sign In</button>
                    <button className='bg-indigo-600 text-white px-8 py-3 border hover:bg-transparent hover:border-indigo-600 hover:text-indigo-600  rounded-md'>Sign Up</button>
                </div>
            </ul>

        </div>
    )
}
