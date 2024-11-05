import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
const Userpage = () => {
  const name=useParams().username
    const authoristed=true;
    const navigate=useNavigate();
    useEffect(()=>{
        if(!authoristed){
          navigate("/home")
        }
    },[])
  return (
    <section className='flex justify-center items-center text-2xl text-center bg-black h-full w-full'   style={{
      backgroundImage: 'url(https://i.pinimg.com/originals/07/5e/b7/075eb74eca4cb75163d83e77b743f998.gif)', // Static GIF as background
      backgroundSize: 'cover', // Ensure the background covers the entire div
      backgroundPosition: 'center', // Center the background image
      backgroundRepeat: 'no-repeat', // Prevent background image from repeating
    }}>
      
      <span className='flex'>
      <h1 className='text-7xl text-orange-500 font-jaro underline'>Boo!</h1>
      <h2 className='text-orange-500 font-jaro text-4xl max-w-md'>{name}! May your Halloween be as thrilling as a haunted house and as sweet as candy!</h2>
      </span>

    </section>
  )
}

export default Userpage