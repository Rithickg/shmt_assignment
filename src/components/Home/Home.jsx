import React from 'react'
import doctor from '../../asserts/doctor-avatar.png'

export const Home = () => {
    return (
        <div className='Home w-full md:flex flex-wrap justify-center bg-zinc-200 '>
            <div className='basis-2/4 flex-col justify-items-center grid content-center'>
                <h3 className='text-1xl my-5 '>Get to know the latest technologies in the field of medical science
                    and treatment
                </h3>
                <h1 className='text-2xl my-1 font-bold'>Medical Technologies</h1>
                <button className='my-1 p-2 border text-white border-indigo-600 bg-indigo-600 rounded-md hover:bg-transparent hover:text-black'>Know More</button>
            </div>
            <div className='grid place-items-center'>
                <img src={doctor} className=' my-1 w-[250px] h-[250px]' alt="doctor" />
            </div>
        </div >
    )
}
