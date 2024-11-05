import React from 'react'
import Banner from '../../assets/Images/Banner.png'

const Sectionpage1 = () => {
  return (
    <section className=' relative  w-full flex flex-col bgg-dark md:flex-row h-[91%]'>
      <img src={Banner} className='object-cover h-[91%] w-[90%] md:w-3/4 bg-black' alt='Halloween image' />

      <div className='text-white flex items-center justify-center w-full h-[91%] relative text-center flex-col  space-y-5  bg-black md:w-1/2'>
        <h2 className='font-inika text-2xl mt-4'>31st October 2025</h2>
        <h1 className='capitalize font-jaro text-4xl md:text-5xl animate-pulse text-orange-500' 
            style={{ textShadow: "1px 1px 1px white" }}>
          Happy Halloween
        </h1>
        <b className='text-gray-500 max-w-xs  '>
          (Welcome to this Halloween party with Halloween site, share your horror images with your friends and celebrate Halloween. Dive into the spirit of Halloween with us!)
        </b>
      </div>
    </section>
  )
}

export default Sectionpage1