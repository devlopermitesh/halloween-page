import React from 'react'
import tree from "../../assets/Images/footer-tree1.png"
import star from "../../assets/Images/stars.png"
import Gallery from '../common/Galary'
const Sectionpage3 = () => {
  return (
    <section className='relative md:-top-16 w-full flex flex-col m-0 h-[90%] bg-black justify-center space-y-2'>
        <div className='flex w-full'>
        <img src={tree} height={100} width={100} alt='tree image' className='w-36 h-36 mt-5 scale-x-[-1] scale-150 object-fill'></img>
        <span className='mx-auto flex  my-auto justify-center w-full'>
        <img src={star} height={30} width={40} className='h-10 w-10' alt='star image'></img>
            <h1 className='capitalize text-orange-500 font-jaro text-center text-4xl'>horror ghost galary</h1>
            <img src={star} height={30} width={30} className='h-10 w-10' alt='star image'></img>
            </span>
            <img src={tree} height={100} width={100} alt='tree image' className='w-36 h-36 mt-5 scale-x-[1] ms-auto scale-150 object-fill'></img>
</div>
<div className="container mx-auto p-4">
      <Gallery />
    </div>
    </section>
  )
}

export default Sectionpage3