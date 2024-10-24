import React from 'react'
import Farmghost from "../../assets/Images/about-scare.png"
import Button from '../common/Button'
const Sectionpage4 = () => {
  return (
    <section className=' relative md:-top-16  w-full flex flex-col bgg-dark md:flex-row h-[91%]'>
      <img src={Farmghost} className='object-cover h-[91%] w-full md:w-1/2 bg-black' alt='Halloween image' />
      <div className='text-white flex items-center justify-center w-full h-[91%] relative text-center flex-col  space-y-5  bg-black md:w-1/2'>
      <h1 className='capitalize font-jaro text-4xl md:text-5xl animate-pulse text-orange-500' 
            style={{ textShadow: "1px 1px 1px white" }}>
          Want to see yourself in  scary ghost galary?
        </h1>
        <b className='text-gray-500 max-w-xs  font-jaro'>
        login/sign up and Share your Halloween spirit with us! Upload your spookiest, silliest, or most creative photos to be featured. Your contribution helps build our haunted community and spreads the Halloween fun!
        </b>
        <Button name="Signup" onclick={() => { }} className='bg-orange-500 md:block border-white border-solid border mx-auto font-jaro w-32 h-12 rounded-3xl flex items-center justify-center text-black  text-2xl' hoverClassName='bg-orange-600'></Button>
      </div>
    </section>
  )
}

export default Sectionpage4