import React from 'react'
import SelfieCard from '../componts/common/SelfieCard'
import FilterHead from '../componts/common/FilterHead'
const Selfies = () => {
  return (
    <section className='flex flex-col relative h-full w-full space-y-2'>
      <h1 className='font-jaro text-3xl text-orange-500 text-center mt-10 underline'>Selfies</h1>
      <div className='flex flex-col w-full h-full bg-black \'>
        <FilterHead/>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-11 text-white'>
      <SelfieCard src='https://cdn.pixabay.com/photo/2023/10/09/10/48/girl-8303852_1280.jpg ' candies={5} choclates={5}/>
      <SelfieCard src='https://cdn.pixabay.com/photo/2023/10/09/10/48/girl-8303852_1280.jpg ' candies={5} choclates={5}/>
      <SelfieCard src='https://cdn.pixabay.com/photo/2023/10/09/10/48/girl-8303852_1280.jpg ' candies={5} choclates={5}/>
      <SelfieCard src='https://cdn.pixabay.com/photo/2023/10/09/10/48/girl-8303852_1280.jpg ' candies={5} choclates={5}/>
      <SelfieCard src='https://cdn.pixabay.com/photo/2023/10/09/10/48/girl-8303852_1280.jpg ' candies={5} choclates={5}/>
      <SelfieCard src='https://cdn.pixabay.com/photo/2023/10/09/10/48/girl-8303852_1280.jpg ' candies={5} choclates={5}/>
      <SelfieCard src='https://cdn.pixabay.com/photo/2023/10/09/10/48/girl-8303852_1280.jpg ' candies={5} choclates={5}/>
      </div>
      </div>
    </section>

  )
}

export default Selfies