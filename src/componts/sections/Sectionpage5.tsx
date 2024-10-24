import React from 'react'
import Button from '../common/Button'
import bloodpoat from "../../assets/Images/party-cauldron.png"
const Sectionpage5 = () => {
  return (
    <section className=' relative md:-top-32  w-full h-auto flex flex-col bgg-dark md:flex-row  '>
      <div className='text-white flex items-center justify-center w-full h-full relative text-center flex-col  space-y-5  bg-black md:w-1/2'>
      <h1 className='capitalize font-jaro text-4xl md:text-5xl animate-pulse text-orange-500' 
            style={{ textShadow: "1px 1px 1px white" }}>
          Story behind halloween
        </h1>
        <b className='text-gray-500 max-w-xs  font-jaro'>
        Halloween began with the ancient Celtic festival of Samhain, a magical night when the boundary between the living and the dead blurred. On October 31, people lit bonfires and wore costumes to ward off wandering spirits.
Today, this enchanting night has evolved into a celebration of creativity and fun, filled with spooky costumes, carved pumpkins, and the thrill of trick-or-treating. Halloween is a time where imagination runs wild, and anything can happen!
        </b>
        <Button name="Read More" onclick={() => { }} className='bg-orange-500 md:block border-white border-solid border mx-auto font-jaro w-32 h-12 rounded-3xl flex items-center justify-center text-black  text-2xl' hoverClassName='bg-orange-600'></Button>
      </div>
      <img src={bloodpoat} className=' h-full w-full md:w-1/2 bg-black' alt='Halloween image' />

    </section>
  )
}

export default Sectionpage5